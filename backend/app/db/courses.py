import pymongo
from config import config
from pydantic import BaseModel, Field
from utils.pyobjectId import PyObjectId
from typing import Optional, Dict
from bson import ObjectId
from models.Course import CourseModel


class CourseDB:
    def __init__(self):
        self.client = pymongo.MongoClient(config["MONGO_URI"])
        self.db = self.client[config["MONGO_DB_NAME"]]
        self.collection = self.db["courses"]

    def get(self, user_id: ObjectId):
        query = {"user_id": ObjectId(user_id)}
        res = list(self.collection.find(query))
        return res

    def get_by_id(self, user_id: ObjectId, course_id: str):
        query = {"user_id": ObjectId(user_id), "_id": ObjectId(course_id)}
        res = self.collection.find_one(query)
        return res

    def add(self, user_id: ObjectId, course: CourseModel):
        course_dict = course.dict(by_alias=True)
        course_dict["user_id"] = user_id
        res = self.collection.insert_one(course_dict)
        return True