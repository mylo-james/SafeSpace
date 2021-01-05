# pylint:disable=no-member
from flask import request, jsonify, Blueprint
from flask_wtf.csrf import generate_csrf
from flask_login import (
    LoginManager,
    current_user,
    login_user,
    logout_user,
    login_required,
)
from ..db import db
from ..models import User

bp = Blueprint("auth", __name__, url_prefix="/api")


@bp.route("/csrf/restore")
def restore_csrf():
    if current_user.is_authenticated:
        user = User.query.filter(User.id == current_user.id).first()
        return {"csrf_token": generate_csrf(), "user": user.to_dict()}
    else:
        return {"csrf_token": generate_csrf()}


@bp.route("/login", methods=["POST"])
def login():
    if not request.is_json:
        return jsonify({"msg": "Missing JSON in request"}), 400

    email = request.json.get("email", None)
    password = request.json.get("password", None)

    if not email or not password:
        return {"errors": ["Missing required parameters"]}, 400

    authenticated, user = User.authenticate(email, password)

    if authenticated:
        login_user(user)
        return user.to_dict()

    return {"errors": ["Invalid email or password"]}, 401


@bp.route("/signup", methods=["POST"])
def signup():
    if not request.is_json:
        return jsonify({"msg": "Missing JSON in request"}), 400

    email = request.json.get("email", None)
    password = request.json.get("password", None)
    confirm = request.json.get("confirm", None)
    first = request.json.get("first", None)
    last = request.json.get("last", None)

    if password != confirm:
        return jsonify({"msg": "Passwords do not match"}), 400

    user = User(email=email, first=first, last=last, password=password)
    db.session.add(user)
    db.session.commit()
    login_user(user)
    return user.to_dict()


@bp.route("/logout", methods=["GET"])
@login_required
def logout():
    logout_user()
    return {"msg": "You have been logged out"}, 200
