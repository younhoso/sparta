from pymongo import MongoClient # pymongo를 임포트 하기(패키지 인스톨 먼저 해야겠죠?)
import certifi #보안 이슈가 있을경우 설치해야 하는 플러그인
ca = certifi.where()
client = MongoClient('mongodb+srv://test:sparta@cluster0.3epib.mongodb.net/Cluster0?retryWrites=true&w=majority', tlsCAFile=ca) # mongoDB는 27017 포트로 돌아갑니다.
db = client.dbsparta # 'DB이름'라는 이름의 db를 만듭니다.

# insert / find / update / delete

# 저장 - 예시
doc = {'name':'bobby','age':21}
db.users.insert_one(doc)

# 한 개 찾기 - 예시
user = db.users.find_one({'name':'bobby'})

# 여러개 찾기 - 예시 ( _id 값은 제외하고 출력)
same_ages = list(db.users.find({'age':21},{'_id':False}))

# 바꾸기 - 예시
db.users.update_one({'name':'bobby'},{'$set':{'age':19}})

# 지우기 - 예시
db.users.delete_one({'name':'bobby'})