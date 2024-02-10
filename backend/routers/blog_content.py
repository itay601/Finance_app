#blog content  
from typing import Annotated
from fastapi.params import Depends
from fastapi import APIRouter,Request
from fastapi.encoders import jsonable_encoder
from fastapi.security import OAuth2PasswordBearer

from core.login import validate_token
from core.post_content import show_blog_db ,insert_post_to_blog
from .models import BlogContent, token_model
from .limiter import limiter
from .users import oauth2_scheme



router = APIRouter(prefix="/blog")

#the token auth not working here


@router.get("/content")
async def content_blog(request:Request):
    valid = validate_token(token.password)
    if valid==None:    
       return {"msg":"login before creating content"}
    blog = show_blog_db()
    blog_content = jsonable_encoder(blog)
    return blog_content
    

@router.post('/create_post')
@limiter.limit("1/second")
async def blog_create(request:Request, blog :BlogContent,token: Annotated[str,Depends(token_model)]):
    inserted = None
    inserted = insert_post_to_blog(blog.name,blog.title,blog.body)
    if inserted==None:
       return {"msg":"not inserted"}
    return {"inserted":inserted}   
            




