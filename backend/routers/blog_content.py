# blog content
from typing import Annotated
from fastapi import APIRouter, Request
from fastapi.encoders import jsonable_encoder

from core.post_content import show_blog_db, insert_post_to_blog
from .models import BlogContent


router = APIRouter(prefix="/blog")


@router.get("/content")
async def content_blog(request: Request):
    blog = show_blog_db()
    print(blog)
    blog_content = jsonable_encoder(blog)
    return {"content": blog_content}


@router.post("/create_post")
async def blog_create(request: Request, blog: BlogContent):
    inserted = None
    inserted = insert_post_to_blog(blog.name, blog.title, blog.body)
    if inserted == None:
        return {"msg": "not inserted"}
    return {"inserted": inserted}
