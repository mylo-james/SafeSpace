from flask import Blueprint
from flask_login import current_user
from ..models import User


bp = Blueprint("users", __name__, url_prefix="/api/users")


@bp.route("")
def index():
    users = User.query.filter(User.id != current_user.id).all()
    response = []
    for user in users:
        response.append(user.to_dict())
    print(response)
    return {"users": response}


@bp.route("/<int:id>", methods=["GET"])
def user_detail(id):
    user = User.query.filter(User.id == id).first()
    return {"user": user.to_dict()}
