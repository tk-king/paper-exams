from pydantic import BaseModel, Field
from utils.pyobjectId import PyObjectId#
from typing import Optional

class CourseModel(BaseModel):
    id: Optional[PyObjectId] = Field(default_factory=PyObjectId, alias="_id")
    name: str
    user_id: PyObjectId