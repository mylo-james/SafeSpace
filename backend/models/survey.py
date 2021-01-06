# pylint: disable=no-member
from ..db import db
from datetime import datetime


class Survey(
    db.Model,
):
    __tablename__ = "surveys"

    def update(self):
        time = datetime.now
        print(self.get_current_parameters())
        return time

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    bio = db.Column(db.String(2000))
    location = db.Column(db.Integer)
    job = db.Column(db.String(500))
    salary = db.Column(db.Integer)
    clean = db.Column(db.Integer)
    smoke = db.Column(db.Integer)
    drink = db.Column(db.Integer)
    social = db.Column(db.Integer)
    updated_at = db.Column(db.DateTime, onupdate=datetime.now, default=datetime.now)
    created_at = db.Column(db.DateTime, default=datetime.now)

    user = db.relationship("User", back_populates="survey")

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.user_id,
            "bio": self.bio,
            "location": self.location,
            "job": self.job,
            "salary": self.salary,
            "clean": self.clean,
            "smoke": self.smoke,
            "drink": self.drink,
            "social": self.social,
        }
