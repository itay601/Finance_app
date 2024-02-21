//import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Root from "./components/Root";
import UserRegister from "./components/UserRegister";
import Loan from './components/Loan_calculator';
import SavingsCalculator from './components/Savings_calc'
import RetirementPlanner from './components/Retirment_calc'
import Article from './components/Ariticle';
import BlogContent from './components/Blog_content';
import CreateBlog from './components/CreateBlog';
import ResetPass from './components/ResetPass';

const App = () =>{

  return(
<div>
  <Router>
    <Routes>
      <Route path="/" element={<Root/>} />
      <Route path="/news/article"  element={<Article/>} />
      <Route path="/calculators/loan_calculator"  element={<Loan/>} />
      <Route path="/calculators/savings_calculator"  element={<SavingsCalculator/>} />
      <Route path="/calculators/retirement_planner"  element={<RetirementPlanner/>} />
      <Route path="/blog/content"  element={<BlogContent/>} />
      <Route path="/blog/create_post"  element={<CreateBlog/>} />
      
      <Route path="/users/reset_password"  element={<ResetPass/>} />
      <Route path="/users/register"  element={<UserRegister/>} />

      <Route path="/stocks/real_time"  element={<Loan/>} />
      <Route path="/stocks/bursa_close"  element={<Loan/>} />
     
    </Routes>
  </Router>
  </div>
  );
  
};





export default App;


