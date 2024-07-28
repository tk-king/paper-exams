from pydantic import BaseModel, Field
from utils.pyobjectId import PyObjectId


class SubTextQuestionModel(BaseModel):
    id : PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    name: str
    question: str
    answer: str
    points: int
    difficulty: int
    type: str = "text"
    


QuestionModel = SubTextQuestionModel