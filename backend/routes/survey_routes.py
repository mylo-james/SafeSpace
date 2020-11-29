from flask import Blueprint, request
from ..db import db
from ..models import Survey, User

bp = Blueprint("surveys", __name__, url_prefix="/api/surveys")


@bp.route("")
def index():
    response = Survey.query.all()
    return {"surveys": [survey.to_dict() for survey in response]}


@bp.route("/<int:id>", methods=["GET"])
def survey_detail(id):
    survey = Survey.query.filter(Survey.user_id == id).first()
    return survey.to_dict()


@bp.route("/<int:id>", methods=["POST"])
def edit_survey_detail(id):
    survey = Survey.query.filter(Survey.user_id == id).first()
    update = request.json
    for k, v in update.items():
        setattr(survey, k, v)
    db.session.commit()
    return survey.to_dict()
