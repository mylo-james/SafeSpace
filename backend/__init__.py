# pylint:disable=no-member
from flask import Flask
from .config import Config
from .db import db
from flask_cors import CORS
from flask_wtf.csrf import CSRFProtect
from flask_login import LoginManager
from .models import User
from .routes import routes


# Setup for Flask app
app = Flask(__name__)
app.config.from_object(Config)

# Connect db to app
db.init_app(app)

# Application Security
CORS(app)
CSRFProtect(app)

# Initalize login Manager
login_manager = LoginManager(app)


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(user_id)


# Register routes to app
for route in routes:
    app.register_blueprint(route)


# Serve static files
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def react_root(path):
    print("path", path)
    if path == "favicon.ico":
        return app.send_static_file("favicon.ico")
    return app.send_static_file("index.html")
