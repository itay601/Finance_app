import React, { useState } from 'react';

const SavingsCalculator = () => {
    const [result, setResult] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const initialAmount = parseFloat(formData.get("initial_amount"));
        const monthlyDeposit = parseFloat(formData.get("monthly_deposit"));
        const interestRate = parseFloat(formData.get("interest_rate"));
        const months = parseInt(formData.get("months"));

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ initial_amount: initialAmount, monthly_deposit: monthlyDeposit, interest_rate: interestRate, months: months }),
        };

        const response = await fetch("/calculators/savings_calculator", requestOptions);
        const data = await response.json();

        if (!response.ok) {
            console.error("Error occurred:", data);
        } else {
            setResult(data);
        }
    };

    return (
        <div>
            <h1>Savings Calculator</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="initial_amount">Initial Amount:</label>
                <input type="number" id="initial_amount" name="initial_amount" required />
                <label htmlFor="monthly_deposit">Monthly Deposit:</label>
                <input type="number" id="monthly_deposit" name="monthly_deposit" required />
                <label htmlFor="interest_rate">Interest Rate (%):</label>
                <input type="number" id="interest_rate" name="interest_rate" required />
                <label htmlFor="months">Months:</label>
                <input type="number" id="months" name="months" required />
                <button type="submit">Calculate Savings</button>
            </form>
            {result && (
                <div>
                    <h2>Results:</h2>
                    <p>Total Savings: {result.total_savings}</p>
                </div>
            )}
        </div>
    );
};

export default SavingsCalculator;