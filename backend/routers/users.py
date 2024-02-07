# routers/users.py
from typing import Annotated
from fastapi.params import Depends
from sqlalchemy.orm import Session
from fastapi import APIRouter,Request
from fastapi.security import OAuth2PasswordBearer

from .models import *
from .limiter import limiter
from core.login import *
from core.register import *
from core.forgot_pass import reset_password_and_send_email


router = APIRouter(prefix="/users")



oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

@router.get("/v1")
@limiter.limit("1/second")
def msg1(request:Request):
   return {"masg ":"new user"}


@router.post("/login")
@limiter.limit("1/second")
def login_user(request:Request,user_:req_login_user):
   token = None
   token = login_user_func(user_.username,user_.password) 
   token_model.password = token 
   if token:
      return {"masg":{"token":token,"hello user":user_.username}}
   return {"msg":"not exist user"}   


@router.post('/protected')
@limiter.limit("1/second")
async def protect(request:Request,token: Annotated[str,Depends(token_model)]): 
   valid = validate_token(token.password)
   if valid==None:
      return {"protected file":"very good token works"}
   return{"something":"went wrong"}  
  

@router.post("/register")
@limiter.limit("1/second")
def register(request:Request,req:req_create_user):
   register_check =None
   register_check = register_new_user(req.id_,req.username,req.email,req.password)
   if register_check:
      return{"msg":"working man"}
   return{"msg":"something happend try Again"}   
    

@router.post('/forgot_password')
@limiter.limit("1/second")
async def forgot_password(request:Request,req:req_reset_password):
   emial_check =None
   emial_check = reset_password_and_send_email(req.email)
   if emial_check:
      return{"msg":"working man look at your mail you got new password "}
   return{"msg":"something happend try Again"} 
