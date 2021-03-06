# pylint: disable=no-member
from flask_jwt_extended import create_access_token, get_jwt_identity
from flask_login import UserMixin
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from ..db import db


class User(db.Model, UserMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    first = db.Column(db.String(40), nullable=False)
    last = db.Column(db.String(40), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    password_digest = db.Column(db.String(255), nullable=False)
    updated_at = db.Column(db.DateTime, onupdate=datetime.now, default=datetime.now)
    created_at = db.Column(db.DateTime, default=datetime.now)

    survey = db.relationship("Survey", uselist=False, back_populates="user")

    def to_dict(self):
        return {
            "id": self.id,
            "first": self.first,
            "last": self.last,
            "email": self.email,
            "survey": self.survey.to_dict() if self.survey else None,
        }

    @property
    def password(self):
        raise AttributeError("Password not readable.")

    @password.setter
    def password(self, password):
        self.password_digest = generate_password_hash(password)

    @classmethod
    def authenticate(cls, email, password):
        user = cls.query.filter(User.email == email).scalar()
        return check_password_hash(user.password_digest, password), user
