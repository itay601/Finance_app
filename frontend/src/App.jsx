//import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Root from "./components/Root";
import UserV1 from "./components/UserV1";
import Loan from './components/Loan_calculator';




const App = () =>{

  return(
  <Router>
    <Routes>
      <Route path="/" element={<Root/>} />
      <Route path="/users/v1"  element={<UserV1/>} />
      <Route path="/calculators/loan_calculator"  element={<Loan/>} />
    </Routes>
  </Router>
  );
};



export default App;


