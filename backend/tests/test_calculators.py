from fastapi.testclient import TestClient
from backend.routers.calculators import app
import pytest 


client = TestClient(router)

    
def test_root():
    response = client.get("/calculators/loan_calculator")
    assert response.status_code==200  
    print(response.json())  
    assert response.json()== {"message":"server is running"}