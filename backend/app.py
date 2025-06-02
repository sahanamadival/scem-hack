from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config.from_object('config.Config')
db = SQLAlchemy(app)
CORS(app)


# Import routes
from routes import auth, dashboard, jobs, interview, resume, mentor, chat
app.register_blueprint(auth.bp)
app.register_blueprint(dashboard.bp)
app.register_blueprint(jobs.bp)
app.register_blueprint(interview.bp)
app.register_blueprint(resume.bp)
app.register_blueprint(mentor.bp)
app.register_blueprint(chat.bp)

if __name__ == '__main__':
    app.run(debug=True)
