from flask import Flask, render_template, request, jsonify
app = Flask(__name__)
from pymongo import MongoClient # pymongo를 임포트 하기(패키지 인스톨 먼저 해야겠죠?)
import certifi #보안 이슈가 있을경우 설치해야 하는 플러그인
ca = certifi.where()
client = MongoClient('mongodb+srv://test:sparta@cluster0.3epib.mongodb.net/Cluster0?retryWrites=true&w=majority', tlsCAFile=ca) # mongoDB는 27017 포트로 돌아갑니다.
db = client.dbsparta # 'DB이름'라는 이름의 db를 만듭니다.

@app.route('/')
def home():
   return render_template('index.html')

@app.route("/bucket", methods=["POST"])
def bucket_post():
		bucket_receive = request.form['bucket_give']
		
		bucket_list = list(db.bucket.find({},{'_id':False}))
		count = len(bucket_list) + 1

		doc = {
			'num':count,
			'bucket':bucket_receive,
			'done':0
		}

		db.bucket.insert_one(doc)
		return jsonify({'msg': '등록 완료!!'})

@app.route("/bucket/done", methods=["POST"])
def bucket_done():
		num_receive = request.form['num_give']
		db.bucket.update_one({'num': int(num_receive)},{'$set':{'done':1}})
		return jsonify({'msg': 'bucket 완료'})

@app.route("/bucket", methods=["GET"])
def bucket_get():
		bucket_list = list(db.bucket.find({},{'_id':False}))
		return jsonify({'buckets': bucket_list})

if __name__ == '__main__':
   app.run('0.0.0.0', port=5000, debug=True)