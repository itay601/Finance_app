from fastapi.testclient import TestClient
from backend.routers.calculators import router
import pytest
import json

client = TestClient(router)


def test_loan_calculator():
    input_data = {"principal": 10000, "interest_rate": 5, "months": 12}
    response = client.post("/calculators/loan_calculator", json=input_data)
    assert response.status_code == 200
    data = response.json()
    assert "monthly_payment" in data
    assert "total_payment" in data
    assert "total_interest" in data


def test_savings_calculator():
    input_data = {
        "initial_amount": 5000,
        "monthly_deposit": 1000,
        "interest_rate": 3,
        "months": 24,
    }
    response = client.post("/calculators/savings_calculator", json=input_data)
    assert response.status_code == 200
    data = response.json()
    assert "total_savings" in data


def test_retirement_planner():
    input_data = {
        "current_age": 30,
        "retirement_age": 65,
        "annual_salary": 80000,
        "current_savings": 50000,
        "monthly_contribution": 1000,
        "annual_return": 5,
    }
    response = client.post("/calculators/retirement_planner", json=input_data)
    assert response.status_code == 200
    data = response.json()
    assert "retirement_savings" in data
    assert "monthly_contribution_needed" in data
