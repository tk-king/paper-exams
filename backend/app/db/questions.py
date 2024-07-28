import pymongo
from config import config
from pydantic import BaseModel, Field
from utils.pyobjectId import PyObjectId
from typing import Optional, Dict
from bson import ObjectId
from models.Question import QuestionModel


class QuestionDB:
    def __init__(self):
        self.client = pymongo.MongoClient(config["MONGO_URI"])
        self.db = self.client[config["MONGO_DB_NAME"]]
        self.collection = self.db["questions"]

    def get(self, user_id: ObjectId):
        query = {"user_id": ObjectId(user_id)}
        res = list(self.collection.find(query))
        res = [QuestionModel(**i) for i in res]
        return res
    
    def add(self, user_id : ObjectId, question : QuestionModel):
        question_dict = question.dict(by_alias=True)
        question_dict["user_id"] = user_id
        res = self.collection.insert_one(question_dict)
        return True