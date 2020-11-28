from flask import Blueprint
from backend.models import User #pylint: disable=import-error

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
def index():
    response = User.query.all()
    return {"users": [user.to_dict() for user in response]}

@user_routes.route('/<int:id>', methods=['GET'])
def user_detail(id):
    user = User.query.filter(User.id == id).first()
    return user.to_dict()

