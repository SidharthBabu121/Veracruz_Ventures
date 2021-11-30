from flask import Flask, request, flash, url_for, redirect, render_template, Request
from flask_sqlalchemy import SQLAlchemy
import requests
#save url, delete
#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
import pandas as pd

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/search', methods = ['GET', 'POST'])
def search():
    #return 0
    return render_template('searchTwoTables.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/about')
def about():
    return render_template('about.html')



@app.route('/delete')
def deletedResults():
    return 0
 
@app.route('/merge')
def mergedResults():
    return 0

@app.route('/parse')
def parseCSV():
      # CVS Column Names
      #col_names = ['yearSemester','class','teamNumber', 'teamName', 'projectTitle' , 'organization' , 'industry' , 'abstract' , 'studentNames' ]
      # Use Pandas to parse the CSV file
      #csvData = pd.read_csv(Veracruz_Ventures/Back_End/ProjectList.csv ,names=col_names, header=None)
      df = pd.read_csv (r'/Users/fabiolapineda/Desktop/ProjectList.csv')
      df.to_json (r'/Users/fabiolapineda/Desktop/place_holder/CSVdata.json')
      return df

if __name__ == '__main__':
    app.run()