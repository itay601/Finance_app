import requests
from fastapi import APIRouter, Request

from .models import Articles
from .limiter import limiter


router = APIRouter(prefix="/news")

YOUR_API_TOKEN = "65c223a456a3f2.38480002"


@router.get("/article")
def get_articles(request: Request, arti: Articles):
    url = f"https://eodhd.com/api/news?s={arti.company_name}.US&offset=0&limit={arti.limit}&api_token={YOUR_API_TOKEN}&fmt=json"
    data = requests.get(url).json()
    print(data)
    return {"articles": data}


# "articles""date""title""content"
