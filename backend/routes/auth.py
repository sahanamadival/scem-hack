from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from models import db, User

bp = Blueprint('auth', __name__)

@bp.route('/register', methods=['POST'])
def register():
    data = request.json
    hashed = generate_password_hash(data['password'])
    user = User(name=data['name'], email=data['email'], password=hashed, role=data['role'])
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'User registered'})

@bp.route('/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()
    if user and check_password_hash(user.password, data['password']):
        return jsonify({'message': 'Login successful', 'user_id': user.id, 'role': user.role})
    return jsonify({'message': 'Invalid credentials'}), 401

