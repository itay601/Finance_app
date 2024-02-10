import React, { useEffect, useState } from "react";



const App = () =>{
    const [message,setMessage] = useState("");

    const getRootMessage = async () =>{
       const requestOptions ={
        method:"GET",
        headers:{
            "Conten-Type":"application/json",
        },
       };
       const response = await fetch("/root",requestOptions);
       const data = await response.json();

       if(!response.ok){
        console.log("mess-up");
       }else{
        setMessage(data.message);
       }
    };

    useEffect(() => {
        getRootMessage();
    }, []);

    return(
        <div>
            <h1>app.jsx , message from backend {message}</h1>
        </div>
    );
};

export default App;