from flask import Blueprint, request, jsonify
from ai_engine.match_jobs import match_jobs

bp = Blueprint('jobs', __name__)

@bp.route('/match_jobs', methods=['POST'])
def job_match():
    data = request.json
    results = match_jobs(
        mentee_skills=data['skills'],
        preferred_location=data['location'],
        expected_salary=int(data['salary']),
        expected_role=data['role']
    )
    return jsonify(results)
