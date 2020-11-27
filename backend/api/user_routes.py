from flask import Blueprint, jsonify
from backend.models import User

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
def index():
    response = User.query.all()
    return {"users": [user.to_dict() for user in response]}


@user_routes.route('/<int:id>', methods=['GET', 'POST'])
def user_detail(id):
    return {}