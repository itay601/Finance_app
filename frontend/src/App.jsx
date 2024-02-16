//import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Root from "./components/Root";
import UserV1 from "./components/UserV1";
import Loan from './components/Loan_calculator';
import SavingsCalculator from './components/Savings_calc'
import RetirementPlanner from './components/Retirment_calc'
import Article from './components/Ariticle';
//import Index from './pages/Index'
//import Calculators from './pages/Calculators';

//<Route path="/"  element={<Index/>} />

const App = () =>{

  return(
<div>
  <Router>
    <Routes>
      <Route path="/" element={<Root/>} />
      <Route path="/users/v1"  element={<UserV1/>} />
      <Route path="/calculators/loan_calculator"  element={<Loan/>} />
      <Route path="/calculators/savings_calculator"  element={<SavingsCalculator/>} />
      <Route path="/calculators/retirement_planner"  element={<RetirementPlanner/>} />
      <Route path="/news/article"  element={<Article/>} />
    </Routes>
  </Router>
  </div>
  );
  
};





export default App;


