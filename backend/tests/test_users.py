from fastapi.testclient import TestClient
from backend.routers.users import router 

client = TestClient(router)


def test_register_user():
    user_data = {
        "id_": 123,
        "username": "test_user",
        "email": "test@example.com",
        "password": "testpassword"
    }
    response = client.post("/users/register", json=user_data)
    assert response.status_code == 200
    assert response.json()["msg"] == "not register try again."




def test_reset_password():
    email_data = {"Email": "test@example.com"}
    response = client.post("/users/reset_password", json=email_data)
    assert response.status_code == 200
    assert "message" in response.json()