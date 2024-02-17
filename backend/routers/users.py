# routers/users.py
# global modules
from typing import Annotated, Optional
from fastapi import APIRouter, Request
from fastapi.params import Depends
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordBearer, oauth2
from json import JSONEncoder

# from my project
from .models import *
from core.login import *
from core.register import *
from core.forgot_pass import reset_password_and_send_email

# for protected route users

router = APIRouter(prefix="/users")


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="users/register")



@router.post("/register")
def register(request: Request, req: req_create_user):
    register_check = None
    register_check = register_new_user(req.id_, req.username, req.email, req.password)
    if register_check:
        return {"msg": "register successfuly"}
    else:
        return {"msg": "not register try again."}


#change it to rest password with email
@router.post("/reset_password")
async def protect(request: Request, token: Annotated[str, Depends(token_model)]):
    print(token)
    valid = validate_token(token.password)
    if valid == None:
        return Message(msg="token works")
    return Message(msg="something happend")
