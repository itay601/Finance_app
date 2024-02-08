from pydantic import BaseModel
from sqlalchemy.orm import Session
from fastapi.params import Depends

# users
class req_create_user(BaseModel):
    id_ : int
    username: str
    email : str
    password: str

class res_create_user(BaseModel):
    username:str
    email:str

class req_login_user(BaseModel):
    username:str
    password:str

class res_login_user(BaseModel):
    username:str

class req_reset_password(BaseModel):
    email:str    

class token_model(BaseModel):
    password:dict
###################################
# blog
class BlogContent(BaseModel):
    name:str 
    title:str
    body:str 

   
