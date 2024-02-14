from fastapi import FastAPI, HTTPException
from typing import Annotated ,Optional
from fastapi import APIRouter, Request
###
from .models import *



router = APIRouter(prefix="/calculators")




@app.post("/loan_calculator")
async def loan_calculator(input_data: LoanCalculatorInput):
    principal = input_data.principal
    interest_rate = input_data.interest_rate / 100 / 12  # Monthly interest rate
    months = input_data.months

    monthly_payment = (principal * interest_rate) / (1 - (1 + interest_rate) ** - months)
    total_payment = monthly_payment * months
    total_interest = total_payment - principal
    return {"message":"monthly payment = {monthly_payment} ,total payment = {total_payment} ,total interest = {total_interest} "}
    #return LoanCalculatorOutput(monthly_payment=monthly_payment, total_payment=total_payment, total_interest=total_interest)



@app.post("/savings_calculator")
async def savings_calculator(input_data: SavingsCalculatorInput):
    initial_amount = input_data.initial_amount
    monthly_deposit = input_data.monthly_deposit
    interest_rate = input_data.interest_rate / 100 / 12  # Monthly interest rate
    months = input_data.months

    total_savings = initial_amount
    for _ in range(months):
        total_savings *= 1 + interest_rate
        total_savings += monthly_deposit
    return {"message":"total_savings= {total_savings}"}
    #return SavingsCalculatorOutput(total_savings=total_savings)



@app.post("/retirement_planner")
async def retirement_planner(input_data: RetirementPlannerInput):
    current_age = input_data.current_age
    retirement_age = input_data.retirement_age
    years_to_retirement = retirement_age - current_age
    annual_salary = input_data.annual_salary
    current_savings = input_data.current_savings
    monthly_contribution = input_data.monthly_contribution
    annual_return = input_data.annual_return / 100

    total_savings_needed = annual_salary * years_to_retirement * 0.7  # Rule of thumb: 70% of final salary
    total_savings_needed -= current_savings  # Adjust for current savings

    monthly_contribution_needed = (total_savings_needed - current_savings * (1 + annual_return) ** years_to_retirement) / \
                                  ((1 + annual_return) ** years_to_retirement - 1)
    
    retirement_savings = current_savings * (1 + annual_return) ** years_to_retirement + \
                         monthly_contribution_needed * (((1 + annual_return) ** years_to_retirement - 1) / annual_return)

    return {"message":"retirement savings= {retirement_savings} ,monthly_contribution= {monthly_contribution_needed}"}
    #return RetirementPlannerOutput(retirement_savings=retirement_savings, monthly_contribution_needed=monthly_contribution_needed)
