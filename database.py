# pylint: disable=no-member
from dotenv import load_dotenv
from faker import Faker
from random import randrange
from backend import app
from backend.models import User, Survey
from backend.db import db

load_dotenv()
fake = Faker()


with app.app_context():
    db.drop_all()
    db.create_all()

    demo = User(username='demo_user', email='demo@user.com',
                password="Test@1234")
    mylo = User(username='mylo220', email='mylo@user.com',
                password="Test@1234")
    geoff = User(username='geoff220', email='geoff@user.com',
                 password="Test@1234")
    emily = User(username='emily220', email='emily@user.com',
                 password="Test@1234")
    james = User(username='james220', email='james@user.com',
                 password="Test@1234")

    db.session.add(demo)
    users = [mylo, geoff, emily, james]

    for user in users:
        survey = Survey(user=user,
                        bio=fake.paragraph(nb_sentences=3),
                        location=fake.postcode(),
                        job=fake.job(),
                        salary=randrange(20000, 100000),
                        clean=randrange(1, 5),
                        smoke=randrange(1, 5),
                        drink=randrange(1, 5),
                        social=randrange(1, 5),
                        )
        db.session.add(survey)

    db.session.commit()
