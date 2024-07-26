from fastapi import APIRouter, Depends, Body, status, Response
from utils.jwt_token import verify_token, TokenModel
from controller.courseController import CourseController
from models.Course import CourseModel
from utils.JsonEncoder import JSONEncoder
import json


router = APIRouter()

courseController = CourseController()


@router.get("/")
async def get_router(user: TokenModel = Depends(verify_token)):
    res = courseController.get_courses(user)
    print(res)
    return Response(status_code=status.HTTP_200_OK, content=json.dumps(res, cls=JSONEncoder))

@router.get("/{course_id}")
async def get_router(course_id: str, user: TokenModel = Depends(verify_token)):
    res = courseController.get_course(user, course_id)
    return Response(status_code=status.HTTP_200_OK, content=json.dumps(res, cls=JSONEncoder))


@router.post("/")
async def post_router(user: TokenModel = Depends(verify_token), course : CourseModel = Body(...)):
    res = courseController.add_course(user, course)
    return Response(status_code=status.HTTP_200_OK, content=json.dumps(res, cls=JSONEncoder))