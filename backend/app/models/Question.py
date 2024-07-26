from pydantic import BaseModel

class ExamSection(BaseModel):
    heading: str


class QuestionModel(BaseModel):
    heading: str


class SubTextQuetsionModel(BaseModel):
    question: str
    answer: str
    answer_lines: str
    points: int