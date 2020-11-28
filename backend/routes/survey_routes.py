from flask import Blueprint
from ..models import Survey, User

bp = Blueprint('surveys', __name__, url_prefix="/api/surveys")


@bp.route('/')
def index():
    response = Survey.query.all()
    return {"surveys": [survey.to_dict() for survey in response]}


@bp.route('/<int:id>', methods=['GET'])
def survey_detail(id):
    survey = Survey.query.filter(Survey.id == id).first()
    return survey.to_dict()
