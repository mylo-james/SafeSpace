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

    demo = User(
        first="Demo",
        last="User",
        email="DemoUser@user.com",
        password="Test@1234",
    )
    mylo = User(
        first="Mylo",
        last="James",
        email="MyloJames@user.com",
        password="Test@1234",
    )

    users = [demo, mylo]

    for i in range(1, 100):
        first = fake.first_name()
        last = fake.last_name()
        user = User(
            first=first,
            last=last,
            email=f"{first}{last}@user.com",
            password="Test@1234",
        )
        users.append(user)

    for user in users:
        survey = Survey(
            user=user,
            bio=fake.paragraph(nb_sentences=3),
            location=fake.postcode(),
            job=fake.job(),
            salary=(randrange(20000, 100000) / 12),
            clean=randrange(1, 5),
            smoke=randrange(1, 5),
            drink=randrange(1, 5),
            social=randrange(1, 5),
        )
        db.session.add(survey)

    db.session.commit()
