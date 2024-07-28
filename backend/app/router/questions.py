from fastapi import APIRouter, Depends, Body, status, Response
from utils.jwt_token import verify_token, TokenModel
from controller.courseController import CourseController
from models.Course import CourseModel
from utils.JsonEncoder import JSONEncoder
from controller.questionController import QuestionController
from models.Question import QuestionModel
import json

router = APIRouter()

questionController = QuestionController()


@router.post("/")
async def get_questions(user: TokenModel = Depends(verify_token), question: QuestionModel = Body(...)):
    res = questionController.add_question(user, question)
    return Response(status_code=status.HTTP_200_OK, content=json.dumps(res, cls=JSONEncoder))

@router.get("/")
async def get_questions(user: TokenModel = Depends(verify_token)):
    res = questionController.get_questions(user)
    return Response(status_code=status.HTTP_200_OK, content=json.dumps(res, cls=JSONEncoder))