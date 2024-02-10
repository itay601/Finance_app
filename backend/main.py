from fastapi import FastAPI ,Response
from routers.users import router as users_router
from routers.blog_content import router as blog_router
from routers.finance_articles_api import router as finance_new_aricles

from routers.limiter import limiter 



app =  FastAPI()

app.include_router(users_router)
app.include_router(blog_router)
app.include_router(finance_new_aricles)


@app.get("/")
def root():
    return Response("server is running")



