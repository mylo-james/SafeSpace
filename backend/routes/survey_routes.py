# pylint:disable=no-member
from flask import Blueprint, request
from ..db import db
from ..models import Survey, User
from flask_login import current_user

bp = Blueprint("surveys", __name__, url_prefix="/api/surveys")


@bp.route("")
def index():
    response = Survey.query.all()
    return {"surveys": [survey.to_dict() for survey in response]}


@bp.route("/<int:id>", methods=["GET"])
def survey_detail(id):
    survey = Survey.query.filter(Survey.user_id == id).first()
    return survey.to_dict()


@bp.route("", methods=["PUT"])
def edit_survey_detail():
    survey = Survey.query.filter(Survey.user_id == current_user.id).first()
    update = request.json
    for k, v in update.items():
        setattr(survey, k, v)
    db.session.commit()
    byId = {}
    byId[current_user.id] = survey.user.to_dict()
    return {"byId": byId}
