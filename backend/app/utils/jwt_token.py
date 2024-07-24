import jwt
from config import config
from fastapi import Depends, Cookie
from fastapi.exceptions import HTTPException
from jwt import PyJWTError
from pydantic import BaseModel, Field
from utils.pyobjectId import PyObjectId
from typing import Union, Annotated

class TokenModel(BaseModel):
    id: PyObjectId = Field(alias="_id")
    username: str
    email: str
    login_provider: str
    avatar_url: str



def gen_jwt_token(user_id, username, email, login_provider, avatar_url):
    payload = {
        "_id": str(user_id),
        "username": username,
        "email": email,
        "login_provider": login_provider,
        "avatar_url": avatar_url,
    }
    token = jwt.encode(payload, config["SECRET_KEY"], algorithm="HS256")
    return token


def verify_token(token: Annotated[Union[str, None], Cookie()] = None):
    if token is None:
            raise HTTPException(
                status_code=401,
                detail="Token is missing",
                headers={"WWW-Authenticate": "Bearer"},
            )

    credentials_exception = HTTPException(
        status_code=401,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        print(token)
        payload = jwt.decode(token, config["SECRET_KEY"], algorithms=["HS256"])
        print(payload)
        token_data = TokenModel(**payload)
    except PyJWTError:
        raise credentials_exception
    return token_data