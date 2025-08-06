from flask import Blueprint, request, jsonify
import random

bp = Blueprint('mentor', __name__)

@bp.route('/join_mentor', methods=['POST'])
def join():
    mentee_id = request.json['mentee_id']
    mentor_id = random.randint(1000, 9999)
    # Store the pairing if needed
    return jsonify({'message': 'Mentor assigned', 'mentor_id': mentor_id})
