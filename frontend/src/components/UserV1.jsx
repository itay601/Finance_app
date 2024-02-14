import React, { useEffect, useState } from "react";



const UserV1 = () => {
    const [message, setMessage] = useState("");

    const getRootMessage = async () => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch("/users/v1", requestOptions);
        const data = await response.json();

        console.log(data)
        console.log(response)

        if (response.ok !== true) {
            console.log("mess-up");
        } else {
            console.log("i am a genuis")
            console.log(data.message)
            setMessage(data.message);
        }
    };

    useEffect(() => {
        getRootMessage();
    }, []);

    return (
        <div>
            <h1>if you are: {message}, you need register first</h1>
        </div>
    );
};

export default UserV1;