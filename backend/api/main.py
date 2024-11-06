import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from router import api_router
import logging
from dotenv import load_dotenv
load_dotenv()


def configure_logging():
    logging.basicConfig(level=logging.DEBUG)
    logger = logging.getLogger(__name__)
    handler = logging.StreamHandler()
    handler.setLevel(logging.DEBUG)
    formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
    handler.setFormatter(formatter)
    logger.addHandler(handler)
    logger.propagate = False
    return logger

logger = configure_logging()

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router)


@app.get("/api/welcome")
async def welcome():
    return {"message": "Welcome to the API"}

if __name__ == '__main__':
    uvicorn.run('main:app', host='0.0.0.0', port=8080, reload=True)
