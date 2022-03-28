from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

import requests
from bs4 import BeautifulSoup

from pymongo import MongoClient # pymongo를 임포트 하기(패키지 인스톨 먼저 해야겠죠?)
import certifi #보안 이슈가 있을경우 설치해야 하는 플러그인
ca = certifi.where()
client = MongoClient('mongodb+srv://test:sparta@cluster0.3epib.mongodb.net/Cluster0?retryWrites=true&w=majority', tlsCAFile=ca) # mongoDB는 27017 포트로 돌아갑니다.
db = client.dbsparta # 'DB이름'라는 이름의 db를 만듭니다.

@app.route('/')
def home():
   return render_template('index.html')

@app.route("/movie", methods=["POST"])
def movie_post():
		url_receive = request.form['url_give']
		star_receive = request.form['star_give']
		comment_receive = request.form['comment_give']

		headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
		data = requests.get(url_receive, headers=headers)
		soup = BeautifulSoup(data.text, 'html.parser')

		title = soup.select_one('meta[property="og:title"]')['content']
		image = soup.select_one('meta[property="og:image"]')['content']
		desc = soup.select_one('meta[property="og:description"]')['content']

		doc = {
			'title': title,
			'image': image,
			'desc': desc,
			'star': star_receive,
			'comment': comment_receive
		}
		db.movies.insert_one(doc)

		return jsonify({'msg':'저장 완료!'})

@app.route("/movie", methods=["GET"])
def movie_get():
		movie_list = list(db.movies.find({},{'_id':False}))
		return jsonify({'movies':movie_list})

if __name__ == '__main__':
   app.run('0.0.0.0', port=5000, debug=True)