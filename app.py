from flask import Flask, render_template, redirect, url_for, jsonify, request
from flask_debugtoolbar import DebugToolbarExtension
import random, pdb, requests
import json

app = Flask(__name__)
app.config["SECRET_KEY"] = "SECRET!"
debug = DebugToolbarExtension(app)


@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")


@app.route("/api/get-lucky-num", methods=["POST"])
def api_route_get_lucky_num():
    """Handle get request and return info about user's birth year"""
    random_number = random.randint(1, 100)

    form_data = json.loads(request.data)
    errors = generate_error_message(form_data.items())
    if len(errors) > 0:
        return jsonify({"errors": errors})

    number_fact = requests.get(f"http://numbersapi.com/{random_number}")
    year_fact = requests.get(f'http://numbersapi.com/{form_data["year"]}/year')
    if number_fact.status_code == 200 and year_fact.status_code == 200:
        # return JSON for successful response
        resp = {
            "num": {"fact": number_fact.text, "num": random_number},
            "year": {"fact": year_fact.text, "year": form_data["year"]},
        }
        return resp
    return False


def generate_error_message(fields):
    """Return custom error message based on field type"""
    return_val = {}
    error_values = {
        "color": "Invalid value - must be red, green, orange or blue",
        "name": "Name is required",
        "year": "Year is required",
        "email": "Email is required",
    }
    for (field, value) in fields:
        if value in [None, ""]:
            return_val[field] = [error_values[field]]
    return return_val
