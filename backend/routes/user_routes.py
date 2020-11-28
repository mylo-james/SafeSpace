from flask import Blueprint
from ..models import User

bp = Blueprint('users', __name__, url_prefix="/api/users")


@bp.route('/')
def index():
    response = User.query.all()
    return {"users": [user.to_dict() for user in response]}


@bp.route('/<int:id>', methods=['GET'])
def user_detail(id):
    user = User.query.filter(User.id == id).first()
    return user.to_dict()
