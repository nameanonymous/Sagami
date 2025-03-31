from flask import Blueprint, request, render_template, jsonify, url_for
from flask_restful import Api, Resource, abort
import os
sagami_bp = Blueprint('sagami_bp', __name__)
sagami_api = Api(sagami_bp)

@sagami_bp.route('/', methods=['GET'], strict_slashes=False)
def show_main_homepage():
    try:
        dir_path = os.path.dirname(os.path.realpath(__file__))
        print(dir_path)
        return render_template("HTML/main.html")
    except AttributeError as e:
        logging.error(f"endpoint={request.path} method={request.method}, error={str(e)}")
        return jsonify({'error': str(e)}), 400


@sagami_bp.route('/menu', methods=['GET'], strict_slashes=False)
def show_menu_pdf():
    try:
        print(url_for('static', filename='pdf/menu.pdf'))
        return render_template("HTML/pdf.html")
    except AttributeError as e:
        logging.error(f"endpoint={request.path} method={request.method}, error={str(e)}")
        return jsonify({'error': str(e)}), 400
