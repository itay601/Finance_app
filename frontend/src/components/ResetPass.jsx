import React, { useEffect, useState } from "react";



const ResetPass = () => {
    const [message, setMessage] = useState("");

    const getRootMessage = async () => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch("/users/register", requestOptions);
        const data = await response.json();

        console.log(data)
        console.log(response)

        if (response.ok !== true) {
            console.log("mess-up");
        } else {
            console.log(data.message)
            setMessage(data.message);
            
        }
    };

    useEffect(() => {
        getRootMessage();
    }, []);

    return (
        <div>
            <h1>register successfully , {message}</h1>
        </div>
    );
};

export default ResetPass;