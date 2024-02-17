from fastapi import FastAPI, Response, APIRouter
from routers.users import router as users_router
from routers.blog_content import router as blog_router
from routers.finance_articles_api import router as aricles_router
from routers.stocks_api import router as stock_router
from routers.calculators import router as cal_router


app = FastAPI()

app.include_router(users_router)
app.include_router(blog_router)
app.include_router(aricles_router)
app.include_router(stock_router)
app.include_router(cal_router)




@app.get("/")
async def index():
    return {"message": "server is running"}



@app.get("/root")
async def root():
    return {"message": "server is running"}
