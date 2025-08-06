from flask import Blueprint, request, jsonify
from models import db, Interview

bp = Blueprint('interview', __name__)

@bp.route('/book_interview', methods=['POST'])
def book():
    data = request.json
    interview = Interview(
        user_id=data['user_id'],
        company_name=data['company'],
        time=data['time'],
        status='Scheduled',
        required_docs="ID Proof, Resume, Certificates"
    )
    db.session.add(interview)
    db.session.commit()
    return jsonify({'message': 'Interview booked'})
