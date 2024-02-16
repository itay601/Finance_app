// RetirementPlannerComponent.js
import React, { useState } from 'react';

const RetirementPlanner = () => {
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const currentAge = parseInt(formData.get("current_age"));
        const retirementAge = parseInt(formData.get("retirement_age"));
        const annualSalary = parseFloat(formData.get("annual_salary"));
        const currentSavings = parseFloat(formData.get("current_savings"));
        const monthlyContribution = parseFloat(formData.get("monthly_contribution"));
        const annualReturn = parseFloat(formData.get("annual_return"));

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ current_age: currentAge, retirement_age: retirementAge, annual_salary: annualSalary, current_savings: currentSavings, monthly_contribution: monthlyContribution, annual_return: annualReturn }),
        };

        const response = await fetch("/calculators/retirement_planner", requestOptions);
        const data = await response.json();
        console.log(data)

        if (!response.ok) {
            console.error("Error occurred:", data);
        } else {
            if ("mathERR" in data) {
                setError(data.mathERR);
            } else {
                setResult(data);
            }
        }
    };

    return (
        <div>
            <h1>Retirement Planner</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="current_age">Current Age:</label>
                <input type="number" id="current_age" name="current_age" required />
                <label htmlFor="retirement_age">Retirement Age:</label>
                <input type="number" id="retirement_age" name="retirement_age" required />
                <label htmlFor="annual_salary">Annual Salary:</label>
                <input type="number" id="annual_salary" name="annual_salary" required />
                <label htmlFor="current_savings">Current Savings:</label>
                <input type="number" id="current_savings" name="current_savings" required />
                <label htmlFor="monthly_contribution">Monthly Contribution:</label>
                <input type="number" id="monthly_contribution" name="monthly_contribution" required />
                <label htmlFor="annual_return">Annual Return (%):</label>
                <input type="number" id="annual_return" name="annual_return" required />
                <button type="submit">Calculate Retirement</button>
            </form>
            {error && (
                <div>
                    <h2>Error:</h2>
                    <p>{error}</p>
                </div>
            )}
            {result && (
                <div>
                    <h2>Results:</h2>
                    <p>Retirement Savings: {result.retirement_savings}</p>
                    <p>Monthly Contribution Needed: {result.monthly_contribution_needed}</p>
                </div>
            )}
        </div>
    );
};

export default RetirementPlanner;