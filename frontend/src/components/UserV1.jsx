import React, { useEffect, useState } from "react";



const UserV1 = () =>{
    const [message,setMessage] = useState("");

    const getRootMessage = async () =>{
       const requestOptions ={
        method:"GET",
        headers:{
            "Conten-Type":"application/json",
        },
       };
       const response = await fetch("/users/v1",requestOptions);
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
            <h1>UserV1, message from backend:  {message}</h1>
        </div>
    );
};
export default UserV1;