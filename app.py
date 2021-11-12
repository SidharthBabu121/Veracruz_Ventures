from flask import Flask, request, flash, url_for, redirect, render_template, Request
from flask_sqlalchemy import SQLAlchemy
import requests
#save url, delete
#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

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/search', methods = ['GET', 'POST'])
def search():
    return 0

@app.route('/delete')
def deletedResults():
    return 0
 
@app.route('/merge')
def mergedResults():
    return 0

if __name__ == '__main__':
    app.run()