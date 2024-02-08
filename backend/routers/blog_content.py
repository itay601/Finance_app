#blog content  
from typing import Annotated####
from fastapi.params import Depends
from fastapi import APIRouter,Request
from datetime import datetime, timedelta
from fastapi.encoders import jsonable_encoder
from fastapi.security import OAuth2PasswordBearer


from core.post_content import insert_post_to_blog , show_blog_db
from core.login import validate_token
from .models import BlogContent,token_model
from .limiter import limiter




router = APIRouter(prefix="/blog")


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")


@router.get("/blog")
async def content_blog(request:Request,blog :BlogContent):
    blog = show_blog_db()
    blog_content = jsonable_encoder(blog)
    return blog_content
    
     


@router.post('/create_post')
@limiter.limit("1/second")
async def blog_create(request:Request,blog :BlogContent, token: Annotated[str,Depends(token_model)]):
    valid = validate_token(token.password)
    if valid==None:    
        return {"msg":"login before creating content"}
    inserted = None
    inserted = insert_post_to_blog(blog)
    if inserted:
       return {"msg":"not inserted"}
    return {"inserted":inserted}   
       


