from pydantic import BaseModel
from sqlalchemy.orm import Session
from fastapi.params import Depends
from typing import Optional

#RESPONSES
#massages responses
class Message(BaseModel):
   msg: str

class Stock(BaseModel):
   stock: dict

#REQUESTS
# users
class req_create_user(BaseModel):
    id_ : int
    username: str
    email : str
    password: str



class req_login_user(BaseModel):
    username:str
    password:str

class req_reset_password(BaseModel):
    email:str    

class token_model(BaseModel):
    password:dict

# blog
class BlogContent(BaseModel):
    name:str 
    title:str
    body:str 

# articles api
class Articles(BaseModel):
    company_name:str 
    limit :str 
      
# stocks
class Stocks_Request(BaseModel):
    stock_ : str 


'''{"AAPL","MSFT","AMZN","GOOGL","FB","TSLA","JNJ","JPM",
                       "V","PG","SBUX","COST","PEP","CMCSA","MAR","BKNG",
                       "DLTR","AVGO","TMUS","KHC"}   '''
                       
                       
                       
#calculators
class RetirementPlannerInput(BaseModel):
    current_age: int
    retirement_age: int
    annual_salary: float
    current_savings: float
    monthly_contribution: float
    annual_return: float

class RetirementPlannerOutput(BaseModel):
    retirement_savings: float
    monthly_contribution_needed: float                       


class LoanCalculatorInput(BaseModel):
    principal: float
    interest_rate: float
    months: int

class LoanCalculatorOutput(BaseModel):
    monthly_payment: float
    total_payment: float
    total_interest: float

class SavingsCalculatorInput(BaseModel):
    initial_amount: float
    monthly_deposit: float
    interest_rate: float
    months: int

class SavingsCalculatorOutput(BaseModel):
    total_savings: float    