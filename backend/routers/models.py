from pydantic import BaseModel
from sqlalchemy.orm import Session


# login user
class requset_user(BaseModel):
    id : int
    mail : str
    username: str
    password: str

def create_user__(req:requset_user,session:Session):
    return 0