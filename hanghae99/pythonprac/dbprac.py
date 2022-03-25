from pymongo import MongoClient
client = MongoClient('mongodb+srv://test:sparta@cluster0.3epib.mongodb.net/Cluster0?retryWrites=true&w=majority')
db = client.dbtriplexlab

doc = {
    'name':'bob',
    'age':27
}

db.users.insert_one(doc)