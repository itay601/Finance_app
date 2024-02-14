from fastapi import FastAPI ,Response
from routers.users import router as users_router
from routers.blog_content import router as blog_router
from routers.finance_articles_api import router as aricles_router
from routers.stocks_api import router as stock_router

from routers.limiter import limiter 



app =  FastAPI()

app.include_router(users_router)
app.include_router(blog_router)
app.include_router(aricles_router)
app.include_router(stock_router)



@app.get("/root")
async def root():
    return {"message":"server is running"}



