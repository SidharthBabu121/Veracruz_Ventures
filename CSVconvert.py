import pandas as pd
import json
import csv

#def parseCSV():
    #df = pd.read_csv (r'/Users/fabiolapineda/Desktop/ProjectList.csv')
    #df.to_json (r'/Users/fabiolapineda/Desktop/place_holder/CSVdata.json')

with open ("/Users/fabiolapineda/Desktop/ProjectList.csv", "r") as f:
    reader = csv.reader(f)
    next(reader)
    data = {"projects": []}
    for row in reader:
        data["projects"].append({"yearSemester":row[0],"class":row[1],"teamNumber":row[2],"teamName":row[3],"projectTitle":row[4]})

with open ("CSVdata.json","w") as f:
    json.dump(data, f, indent=4)
