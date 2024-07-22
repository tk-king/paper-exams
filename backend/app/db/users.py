import pymongo
from config import config
from pydantic import BaseModel, Field
from utils.pyobjectId import PyObjectId
from typing import Optional, Dict

class Create_Update_Model(BaseModel):
    # id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    login_provider: str
    provider_id: str
    username: str
    email: str
    avatar_url: Optional[str] = None


class DBModel(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    username: str
    login_provider: str
    provider_id: str
    email: str
    avatar_url: Optional[str] = None


class UserDB:
    def __init__(self):
        self.client = pymongo.MongoClient(config["MONGO_URI"])
        self.db = self.client[config["MONGO_DB_NAME"]]
        self.collection = self.db["users"]

    def create_or_update(self, user_data : Dict):
        user = Create_Update_Model(**user_data)
        provider_id = user.provider_id
        login_provider = user.login_provider
        query = {"id": provider_id, "login_provider": login_provider}
        res = self.collection.find_one_and_update(query, {"$set": user.dict(by_alias=True)}, return_document=pymongo.ReturnDocument.AFTER, upsert=True)
        return DBModel(**res)
