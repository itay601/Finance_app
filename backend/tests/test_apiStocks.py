import pytest
from fastapi.testclient import TestClient
from backend.routers.stocks_api import router  # Assuming your FastAPI application instance is named 'app'
from backend.routers.models import Stocks_Request

client = TestClient(router)

@pytest.mark.parametrize("stock_name", ["AAPL", "MSFT"])  # Example stock names for testing
def test_get_stocks_bursa_close(stock_name):
    # Prepare request data
    request_data = {"stock_": stock_name}

    # Make request to the endpoint
    response = client.post("/stocks/bursa_close", json=request_data)

    # Check status code
    assert response.status_code == 200

    
    
    
    
    
@pytest.mark.parametrize("stock_name", ["AAPL", "MSFT"])  # Example stock names for testing
def test_realtime_data_company(stock_name):
    # Prepare request data
    request_data = {"stock_": stock_name}

    # Make request to the endpoint
    response = client.post("/stocks/realTime", json=request_data)

    # Check status code
    assert response.status_code == 200

    # Check response content
    data = response.json()
    # Additional assertions based on your specific requirements