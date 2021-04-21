from flask import Flask, render_template, redirect, url_for, jsonify, request
from flask_debugtoolbar import DebugToolbarExtension
import random, pdb, requests

app = Flask(__name__)
app.config["SECRET_KEY"] = "SECRET!"
debug = DebugToolbarExtension(app)


@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")


@app.route("/api/get-lucky-num")
def api_route_get_lucky_num():
    """Handle get request and return info about user's birth year"""
    random_number = random.randint(1, 100)

    get_request = {
        "name": request.args.get("name"),
        "email": request.args.get("email"),
        "year": request.args.get("year"),
        "color": request.args.get("color"),
    }
    errors = generate_error_message(get_request.items())
    if len(errors) > 0:
        return jsonify({"errors": errors})

    number_fact = requests.get(
        f"https://numbersapi.com", params={"number": random_number}
    )
    year_fact = requests.get(
        f'http://numbersapi.com/{get_request["year"]}/year',
        headers={"Content-Type": "application/json"},
    )

    # return JSON for successful response
    resp = {"num": {number_fact.text}, "year": {year_fact.text}}
    return resp


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
        print(field, value)
        if value is None:
            return_val[field] = [error_values[field]]
    return return_val
