from fastapi import APIRouter, Depends, HTTPException, status, Request, Response
import httpx
from fastapi.responses import RedirectResponse
from db.users import UserDB
from config import config
import requests
import json
from utils.jwt_token import gen_jwt_token

redirect_uri = f"{config['APP_URL']}/login/github/callback"

router = APIRouter(tags=["auth"])


class AuthGithubController:
    def __init__(self) -> None:
        self.userDB = UserDB()

    async def login_github(self):
        client_id = config["GITHUB_CLIENT_ID"]
        github_url = f'https://github.com/login/oauth/authorize?client_id={client_id}&scope=user:email'
        return github_url

    async def token_github(self, request: Request):
        code = request.query_params.get("code")
        if not code:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Missing code parameter")

        params = {
            "client_id": config["GITHUB_CLIENT_ID"],
            "client_secret": config["GITHUB_CLIENT_SECRET"],
            "code": code,
        }

        headers = {
            "Accept": "application/json"
        }

        async with httpx.AsyncClient() as client:
            res = await client.post("https://github.com/login/oauth/access_token", params=params, headers=headers)
            if res.status_code != 200:
                raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid token")
            token_data = res.json()
            access_token = token_data["access_token"]

        headers.update({"Authorization": f"token {access_token}"})
        
        async with httpx.AsyncClient() as client:
            res = await client.get("https://api.github.com/user", headers=headers)
            github_data = res.json()

            res = await client.get("https://api.github.com/user/emails", headers=headers)
            emails_data = res.json()
            primary_email = next(email["email"] for email in emails_data if email["primary"] and email["verified"])

            user_data = {
                "provider_id": str(github_data["id"]),
                "username": github_data["login"],
                "email": primary_email,
                "avatar_url": github_data["avatar_url"],
                "login_provider": "github"
            }
            
            new_user = self.userDB.create_or_update(user_data)

            token = gen_jwt_token(new_user.id, new_user.username, new_user.email, new_user.login_provider, new_user.avatar_url)
        return token
