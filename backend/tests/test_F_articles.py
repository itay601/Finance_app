import pytest
from fastapi.testclient import TestClient
from backend.routers.finance_articles_api import (
    router,
)  # Assuming your FastAPI application instance is named 'app'
from backend.routers.models import Articles

client = TestClient(router)


def test_get_articles():
    # Prepare request data
    request_data = {"company_name": "AAPL", "limit": "1"}

    # Make request to the endpoint
    response = client.post("/news/article", json=request_data)

    # Check status code
    assert response.status_code == 200

    # Check response content
    data = response.json()
    assert isinstance(data, list)  # Assuming the response is a list of articles
    for article in data:
        assert "date" in article
        assert "title" in article
        assert "content" in article
        assert "link" in article
