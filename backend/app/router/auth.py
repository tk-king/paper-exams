from fastapi import APIRouter, Depends, HTTPException, status, Request, Response 
import httpx
from fastapi.responses import RedirectResponse, JSONResponse
from db.users import UserDB
from config import config
import requests
import json
from utils.jwt_token import gen_jwt_token, verify_token
from controller.authGithub import AuthGithubController
from bson import json_util
from utils.JsonEncoder import JSONEncoder
from fastapi.encoders import jsonable_encoder

redirect_uri = f"{config['APP_URL']}login/github/callback"

router = APIRouter(tags=["auth"])

authGithubController = AuthGithubController()

@router.get("/login/github")
async def login_github():
    github_url = await authGithubController.login_github()
    return RedirectResponse(github_url)

@router.get("/token/github")
async def token_github(request: Request):
    access_token = await authGithubController.token_github(request)
    response = RedirectResponse(config["APP_URL"], status_code=status.HTTP_307_TEMPORARY_REDIRECT)
    print("Setting cookie", access_token)
    response.set_cookie(key="token", value=access_token, httponly=True)
    return response

@router.get("/logout")
async def logout(response: Response):
    response.delete_cookie("token")
    return {"message": "Logout"}

@router.get("/user")
async def get_user(user: dict = Depends(verify_token)):
    user_dict = user.dict(by_alias=True)
    return Response(status_code=status.HTTP_200_OK, content=json.dumps(user_dict, cls=JSONEncoder))