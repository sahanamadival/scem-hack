from flask import Blueprint, request, jsonify

bp = Blueprint('chat', __name__)

chat_log = []

@bp.route('/chat', methods=['POST'])
def send_message():
    data = request.json
    chat_log.append({'sender': data['sender'], 'receiver': data['receiver'], 'message': data['message']})
    return jsonify({'status': 'Message sent'})

@bp.route('/chat/<int:user_id>', methods=['GET'])
def get_chat(user_id):
    messages = [m for m in chat_log if m['sender'] == user_id or m['receiver'] == user_id]
    return jsonify(messages)
