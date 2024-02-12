import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Root from "./components/Root";
import UserV1 from "./components/UserV1";
import UserLogin from "./components/UserLoginW"



const App = () =>{

  return(
  <Router>
    <Routes>
      <Route path="/"  element={<Root/>} />
      <Route path="/users/login"  element={<UserLogin/>} />
      <Route path="/users/v1"  element={<UserV1/>} />
    </Routes>
  </Router>
  );
};



export default App;


