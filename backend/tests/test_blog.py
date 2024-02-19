from fastapi.testclient import TestClient
from backend.routers.blog_content import router  # assuming your FastAPI app instance is named 'app'

client = TestClient(router)


def test_content_blog():
    response = client.get("/blog/content")
    assert response.status_code == 200
    assert "content" in response.json()


def test_blog_create():
    blog_data = {
        "name": "author_name",
        "title": "Test Title",
        "body": "Test Body Content"
    }
    response = client.post("/blog/create_post", json=blog_data)
    assert response.status_code == 200
    assert "inserted" in response.json()