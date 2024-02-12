import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserLogin from "./components/UserLogin";
import UserV1 from "./components/UserV1";
import Root from "./components/Root";


const App = () =>{

    return(
    <Router>
      <Switch>
        <Route exact path="/root" component={Root} />
        <Route path="/users/v1" component={UserV1} />
        <Route path="/users/login" component={UserLogin} />
      </Switch>
    </Router>
    );
};

export default App;
