from fastapi.testclient import TestClient
from backend.main import app
import pytest 


client = TestClient(app)

    
def test_root():
    response = client.get("/root")
    assert response.status_code==200  
    print(response.json())  
    assert response.json()== {"message":"server is running"}