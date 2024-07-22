from fastapi import FastAPI
from router.auth import router as auth_router
import uvicorn
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
        )

app.include_router(auth_router, prefix="/auth", tags=["auth"])


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=4445, reload=True)