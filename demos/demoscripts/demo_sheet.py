import requests
from flask import Flask, render_template, request, session
import sys
import os

dir_path = os.path.dirname(os.path.realpath(__file__))
sys.path.insert(0, dir_path)
from demo_creds import * 

import time
import json
app = Flask(__name__)
@app.route("/")
def index():
    vote_count = {}
    r = requests.get('https://sheets.googleapis.com/v4/spreadsheets/1im28-bXbSmg73ooUejdvSu0Dn6mt2ZYFAN2S-3SWY_s/values/C2:C1000?key='+GOOGLE_API_KEY)
    response_map = json.loads(r.text)
    for val_list in response_map['values']:
        val = val_list[0]
        if val not in vote_count:
           vote_count[val] = 0
        vote_count[val] += 1
    return json.dumps(vote_count)

if __name__ == "__main__":
    app.run()
