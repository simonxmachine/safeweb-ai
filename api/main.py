from flask import Flask
app = Flask(__name__)

@app.route("/api")
def home():
    return "Hello world!"


@app.route("/about")
def about():
    return "Hello world!"