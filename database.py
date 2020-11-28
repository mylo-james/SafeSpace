#pylint: disable=no-member
from dotenv import load_dotenv
load_dotenv()

from backend import app, db
from backend.models import User

with app.app_context():
  db.drop_all()
  db.create_all()

  demo = User(username = 'demo_user', email = 'demo@user.com', password="Test@1234")
  mylo = User(username = 'mylo220', email = 'mylo@user.com', password="Test@1234")
  geoff = User(username = 'geoff220', email = 'geoff@user.com', password="Test@1234")
  emily = User(username = 'emily220', email = 'emily@user.com', password="Test@1234")
  james = User(username = 'james220', email = 'james@user.com', password="Test@1234")


  db.session.add(demo)
  db.session.add(mylo)
  db.session.add(geoff)
  db.session.add(emily)
  db.session.add(james)


  db.session.commit()