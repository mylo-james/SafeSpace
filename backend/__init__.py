import os
from flask import Flask, render_template, request, session, jsonify
from flask_cors import CORS
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import (
    LoginManager,
    current_user,
    login_user,
    logout_user,
    login_required
)

from backend.models import db, User
from backend.api.user_routes import user_routes


from backend.config import Config

app = Flask(__name__)
app.config.from_object(Config)
app.register_blueprint(user_routes, url_prefix='/api/users')
db.init_app(app)
login_manager = LoginManager(app)

# Application Security
CORS(app)
CSRFProtect(app)


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(user_id)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    print("path", path)
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    return app.send_static_file('index.html')


@app.route('/api/csrf/restore')
def restore_csrf():
    if current_user.is_authenticated:
        user = User.query.filter(User.id == current_user.id).first()
        return {'csrf_token': generate_csrf(), "user": user.to_dict()}
    else:
        return {'csrf_token': generate_csrf()}


@app.route('/api/login', methods=['POST'])
def login():
    if not request.is_json:
        return jsonify({"msg": "Missing JSON in request"}), 400

    email = request.json.get('email', None)
    password = request.json.get('password', None)

    if not email or not password:
        return {"errors": ["Missing required parameters"]}, 400

    authenticated, user = User.authenticate(email, password)
  
    if authenticated:
        login_user(user)
        return user.to_dict()

    return {"errors": ["Invalid email or password"]}, 401

@app.route('/api/signup', methods=['POST'])
def signup():
    if not request.is_json:
        return jsonify({"msg": "Missing JSON in request"}), 400
    
    username = request.json.get('username', None)
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    confirm = request.json.get('confirm', None)

    if password != confirm:
        return jsonify({'msg': "Passwords do not match"}), 400
    
    user = User(username=username, email=email, password=password)
    db.session.add(user)
    db.session.commit()
    login_user(user)
    return user.to_dict()



@app.route('/api/logout', methods=['GET'])
@login_required
def logout():
    logout_user()
    return {'msg': 'You have been logged out'}, 200
