import jwt
from config import config

def gen_jwt_token(user_id, username, email, login_provider, avatar_url):
    payload = {
        "user_id": str(user_id),
        "username": username,
        "email": email,
        "login_provider": login_provider,
        "avatar_url": avatar_url,
    }
    token = jwt.encode(payload, config["SECRET_KEY"], algorithm="HS256")
    return token