import React from 'react'; 
import { Link } from 'react-router-dom';  

const Header = () => { 
    return ( 
        <div className="App"> 
             <Link to="/index.html" >  Home  </Link> 
             <Link to="/Loan_calculator" >  HomePage </Link> 
        </div> 
    ); 
}; 
export default Header;