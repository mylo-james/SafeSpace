from flask import Blueprint
from ..models import User


bp = Blueprint("users", __name__, url_prefix="/api/users")


@bp.route("")
def index():
    response = User.query.all()
    byId = {}
    for user in response:
        byId[user.id] = user.to_dict()
    return {"byId": byId}


@bp.route("/<int:id>", methods=["GET"])
def user_detail(id):
    user = User.query.filter(User.id == id).first()
    byId = {}
    byId[user.id] = user.to_dict()
    return {"byId": byId}
