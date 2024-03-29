import React, { useState } from "react";


const Loan = () => {
    const [result, setResult] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const principal = parseFloat(formData.get("principal"));
        const interestRate = parseFloat(formData.get("interestRate"));
        const months = parseInt(formData.get("months"));

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ principal, interest_rate: interestRate, months }),
        };

        
        const response = await fetch("/calculators/loan_calculator", requestOptions);
            
        const data = await response.json();
        console.log(data)
        console.log(response)

        if (response.ok !== true) {
                console.log("mess-up");
        } 
        else {
                console.log("i am a genuis")
                console.log(data.message)
                console.log(data)
                setResult(data);
            
            }
    };

    return (
        
        <div>
            <h1>Loan Calculator</h1>
            <form id="loanCalculatorForm" method="POST" action="/calculators/loan_calculator"  onSubmit={handleSubmit}>
                <label htmlFor="principal">Principal:</label>
                <input type="number" id="principal" name="principal" required />
                <label htmlFor="interestRate">Interest Rate:</label>
                <input type="number" id="interestRate" name="interestRate" required />
                <label htmlFor="months">Months:</label>
                <input type="number" id="months" name="months" required />
                <button type="submit">Calculate Loan</button>
            </form>
            {result && (
                <div>
                    <h2>Results:</h2>
                    <p>Monthly Payment: {result.monthly_payment}</p>
                    <p>Total Payment: {result.total_payment}</p>
                    <p>Total Interest: {result.total_interest}</p>
                </div>
            )}
        </div>
    );
};

export default Loan;