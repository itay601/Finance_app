//import React, { useEffect, useState } from "react";
import React from 'react';
//import Loan from '../components/Loan_calculator';

const Index = () =>{

    return (
        <div>
            <header>
                <img src="your-logo.png" alt="Finance News Logo" />
                <h1>Finance News</h1>
            </header>
            <div id="index"></div>
            <h1>Tech & Finance newest articles from all over the world</h1>
            <p>Here you can find the newest finance articles from all over the world and talk about them with everyone.</p>
            <form method="GET" action="/">
                <button type="submit">Check Server</button>
            </form>
            <div id="navigation">
                <button><a href="/Calculators">Calculators</a></button>
                <button><a href="/register.html">Register page</a></button>
                <button><a href="/forgot_password.html">Forgot Password</a></button>
                <button><a href="/calculator.html">Calculator</a></button>
            </div>
        </div>
    );
  
};





export default Index;