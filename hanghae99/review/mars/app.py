from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient # pymongo를 임포트 하기(패키지 인스톨 먼저 해야겠죠?)
app = Flask(__name__)

import certifi #보안 이슈가 있을경우 설치해야 하는 플러그인
ca = certifi.where()
client = MongoClient('mongodb+srv://soyounho:syh5142024@cluster0.3epib.mongodb.net/Cluster0?retryWrites=true&w=majority', tlsCAFile=ca) # mongoDB는 27017 포트로 돌아갑니다.
db = client.dbsparta # 'DB이름'라는 이름의 db를 만듭니다.

@app.route('/')
def home():
   return render_template('index.html')

@app.route("/mars", methods=["POST"])
def web_mars_post():
		name_receive = request.form['name_give']
		address_receive = request.form['address_give']
		size_receive = request.form['size_give']
		doc = {
			'name': name_receive,
			'address': address_receive,
			'size': size_receive,
		}
		db.mars.insert_one(doc)

		return jsonify({'msg': '주문 완료!'})

@app.route("/mars", methods=["GET"])
def web_mars_get():
		order_list = list(db.mars.find({},{'_id':False}))
		return jsonify({'orders': order_list})

if __name__ == '__main__':
   app.run('0.0.0.0', port=5000, debug=True)