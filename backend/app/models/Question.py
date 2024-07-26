from pydantic import BaseModel


class TextQuetsionModel(BaseModel):
    question: str
    answer: str
    answer_lines: str
    points: int