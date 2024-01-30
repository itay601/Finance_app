from fastapi import FastAPI ,Response
from routers.users import router as users_router
from routers.limiter import limiter 

app =  FastAPI()

app.include_router(users_router)


@app.get("/")
def root():
    return Response("server is running")



