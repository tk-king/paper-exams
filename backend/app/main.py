from fastapi import FastAPI
from router.auth import router as auth_router
from router.courses import router as courses_router
from router.questions import router as questions_router
import uvicorn
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
        )

app.include_router(auth_router, prefix="/auth", tags=["auth"])
app.include_router(courses_router, prefix="/courses", tags=["courses"])
app.include_router(questions_router, prefix="/questions", tags=["questions"])


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=4445, reload=True)