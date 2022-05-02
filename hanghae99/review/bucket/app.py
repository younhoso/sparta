from flask import Flask, render_template, request, jsonify
app = Flask(__name__)
from pymongo import MongoClient
import certifi

ca = certifi.where()
client = MongoClient('mongodb+srv://soyounho:syh5142024@cluster0.3epib.mongodb.net/Cluster0?retryWrites=true&w=majority', tlsCAFile=ca) # mongoDB는 27017 포트로 돌아갑니다.
db = client.dbsparta # 'DB이름'라는 이름의 db를 만듭니다.

@app.route('/')
def home():
   return render_template('index.html')

@app.route("/bucket", methods=["POST"])
def bucket_post():
		bucket_receive = request.form['bucket_give']
		bucket_list = list(db.bucket.find({}, {'_id': False}))
		count = len(bucket_list) + 1
		doc = {
			'id': count,
			'bucket': bucket_receive,
			'done': 0
		}
		db.bucket.insert_one(doc)
		return jsonify({'msg': 'POST(기록) 연결 완료!'})

@app.route("/bucket/done", methods=["POST"])
def bucket_done():
		id_receive = request.form['id_give']
		db.bucket.update_one({'id': int(id_receive)}, {'$set':{'done': 1}})
		return jsonify({'msg': '수정완료'})

@app.route("/bucket", methods=["GET"])
def bucket_get():
		bucket_list = list(db.bucket.find({}, {'_id': False}))
		return jsonify({'buckets': bucket_list})

if __name__ == '__main__':
   app.run('0.0.0.0', port=5000, debug=True)