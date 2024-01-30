# routers/users.py

from fastapi.params import Depends
from sqlalchemy.orm import Session
from fastapi import APIRouter,Request
#from .core import *

from .models import *
from .limiter import limiter
from .core import *

router = APIRouter(prefix="/users")


@router.get("")
@limiter.limit("1/second")
def massage_user(request:Request):
   return {"masg ":"new user"}

@router.post("")
@limiter.limit("1/second")
def create_user(request:Request,user_:requset_user,db:Session=Depends(get_db)):
   return {"masg ":"old user"}

