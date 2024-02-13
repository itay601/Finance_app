# routers/users.py
# global modules
from typing import Annotated
from fastapi.params import Depends
from sqlalchemy.orm import Session
from fastapi import APIRouter, Request
from fastapi.security import OAuth2PasswordBearer, oauth2

# from my project
from .models import *
from .limiter import limiter
from core.login import *
from core.register import *
from core.forgot_pass import reset_password_and_send_email

# for protected route users

router = APIRouter(prefix="/users")


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="users/login")


@router.get("/v1")
def msg1(request: Request):
    print(request)
    return {"message": "new user"}


@router.post("/login")
@limiter.limit("1/second")
def login_user(request: Request, user_: req_login_user):
    token = None
    token = login_user_func(user_.username, user_.password)
    token_model.password = token
    if token:
        print(oauth2_scheme)
        return {"access_token": token, "token_type": "bearer"}
    return {"msg": "not exist user"}


from pydantic import BaseModel
from typing import Optional

class Message(BaseModel):
   msg: str

@router.post("/register")
@limiter.limit("1/second")
def register(request: Request, req: req_create_user):
   register_check = None
   register_check = register_new_user(req.id_, req.username, req.email, req.password)
    
   if register_check: 
      return Message(msg="working man")
   else:
      return Message(msg="something happend try Again")
   


# only users can do this functions
@router.post("/protected")
@limiter.limit("1/second")
async def protect(request: Request, token: Annotated[str, Depends(token_model)]):
    print(token)
    valid = validate_token(token.password)
    if valid == None:
        return {"protected file": "very good token works"}
    return {"something": "went wrong"}
