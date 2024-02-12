import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLogin from "./components/UserLogin";
import UserV1 from "./components/UserV1";
import Root from "./components/Root";


const App = () =>{

    return(
    <Router>
      <Routes>
        <Route path="/"  element={<Root/>} />
        <Route path="/users/v1" element={<UserV1/>} />
        <Route path="/users/login" element={<UserLogin/>} />
      </Routes>
    </Router>
    );
};

export default App;
