import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserLogin from './UserLogin';


const root = ReactDOM.createRoot(document.getElementById('index'));
root.render(<App />);


const userV1 = ReactDOM.createRoot(document.getElementById('login'));
userV1.render(<UserLogin />);


