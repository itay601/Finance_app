import React, { useState } from "react";

const BursaRealTime = () => {
    const [stockData, setStockData] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState("AAPL"); // Default value

    const getStockData = async () => {
        try {
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ stock_: selectedCompany }),
            };
            const response = await fetch('/stocks/real_time', requestOptions);
            const data = await response.json();
            console.log(response)
            console.log(data)
            
            if (!response.ok) {
                console.log("Error fetching data from backend");
            } else {
                setStockData(data);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleFetchClick = () => {
        getStockData();
    };

    const handleCompanyChange = (e) => {
        setSelectedCompany(e.target.value);
    };

    return (
        <div>
            <h1>Bursa Real-Time</h1>
            <label htmlFor="company">Choose a Company:</label>
            <select id="company" name="company" value={selectedCompany} onChange={handleCompanyChange}>
                <option value="AAPL">Apple</option>
                <option value="MSFT">Microsoft</option>
                <option value="AMZN">Amazon</option>
                <option value="GOOGL">Google</option>
                <option value="FB">Facebook</option>
                <option value="TSLA">Tesla</option>
                <option value="JNJ">Johnson & Johnson</option>
                <option value="JPM">JPMorgan Chase</option>
                <option value="V">Visa</option>
                <option value="PG">Procter & Gamble</option>
                <option value="SBUX">Starbucks</option>
                <option value="COST">Costco</option>
                <option value="PEP">PepsiCo</option>
                <option value="CMCSA">Comcast</option>
                <option value="MAR">Marriott International</option>
                <option value="BKNG">Booking Holdings</option>
                <option value="DLTR">Dollar Tree</option>
                <option value="AVGO">Broadcom</option>
                <option value="TMUS">T-Mobile US</option>
                <option value="KHC">Kraft Heinz</option>
            </select>
            <button type="button" onClick={handleFetchClick}>Fetch bursa close</button>
            <div>
                <h2>NASDAQ Data</h2>
                {stockData.map((stock, index) => (
                    <div key={index}>
                        <h3>Code: {stock.code}</h3>
                        <p>Timestamp: {stock.timestamp}</p>
                        <p>Open: {stock.open}</p>
                        <p>High: {stock.high}</p>
                        <p>Low: {stock.low}</p>
                        <p>Close: {stock.close}</p>
                        <p>Volume: {stock.volume}</p>
                        <p>Previous Close: {stock.previousClose}</p>
                        <p>Change: {stock.change}</p>
                        <p>Change Percentage: {stock.change_p}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BursaRealTime;