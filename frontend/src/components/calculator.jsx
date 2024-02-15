//import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loan from './components/Loan_calculator';




const Calculator = () =>{

  return(
  <Router>
    <Routes>
      <Route path="/calculators/loan_calculator"  element={<Loan/>} />
    </Routes>
  </Router>
  );
};

export default Calculator;