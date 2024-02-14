import requests
from fastapi import APIRouter,Request

from .models import Stocks_Request
from .limiter import limiter


router = APIRouter(prefix="/stocks")

YOUR_API_TOKEN = "65c223a456a3f2.38480002"


@router.get("/{stock}")
def get_stocks(request:Request,stocks: Stocks_Request):
    url = f'https://eodhd.com/api/real-time/s={stocks.stock_}.US?&filter=close&api_token={YOUR_API_TOKEN}&fmt=json'
    data = requests.get(url).json()
    print(data)
    return Stock(stock=data)



@router.get("/realTime")
def realtime_data_company(request:Request,stocks: Stocks_Request):
    url = f'https://eodhd.com/api/real-time/{stocks.stock_}.US?s=VTI,EUR.FOREX&api_token={YOUR_API_TOKEN}&fmt=json'
    data = requests.get(url).json()
    print(data)
    return Stock(stock=data)


                    