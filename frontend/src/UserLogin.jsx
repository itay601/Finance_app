import React, { useEffect, useState } from "react";



const UserLogin = () =>{
    const [userLoginMsg,setLoginMessage] = useState("");

    const getUserV1Message = async () =>{
       const requestOptions ={
        method:"GET",
        headers:{
            "Conten-Type":"application/json",
        },
       };
       const response = await fetch('/users/v1',requestOptions);
       const data = await response.json();
       

       if(!response.ok){
        console.log("mess-up");
       }else{
        setLoginMessage(data.userLoginMsg);
       }
       
    };

    useEffect(() => {
        getUserV1Message();
    }, []);

    return(
        <div>
            <h1>user_login.jsx , message from backend {userLoginMsg}</h1>
        </div>
    );
};

export default UserLogin;