from flask import Flask
from results_app.controller.mainpage_controller import sagami_bp
app = Flask(__name__)

def register_blueprints(app):
    app.register_blueprint(sagami_bp)

register_blueprints(app)


if __name__ == '__main__':
    app.run()