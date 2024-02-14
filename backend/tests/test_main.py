from fastapi.testclient import TestClient
from routers.main import app

client = TestClient(app)

def setup_function():
    todos.clear()
    
def test_root():
    response = client.get("/root")
    assert response.status_code==200    
    assert response.json()=={"message":"server is running"}