import React, { useState } from 'react';

const UserRegistrationForm = () => {
    const [formData, setFormData] = useState({
        id: '',
        username: '',
        password: '',
        email: ''
    });
    const [message, setMessage] = useState("");
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            };

            const response = await fetch('/users/register',requestOptions);
            const data = await response.json();
            
            setMessage(data.msg); // Set the message from the response
            if (data.msg === 'register successfuly') {
                setFormData({
                    id: '',
                    username: '',
                    password: '',
                    email: ''
                });
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>User Registration</h2>
                <label htmlFor="id">ID:</label>
                <input type="number" id="id" name="id" pattern="[0-9]*" inputMode="numeric" required value={formData.id} onChange={handleChange} />

                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required value={formData.username} onChange={handleChange} />

                <label htmlFor="password">Password (at least 8 characters, including uppercase, lowercase, and a number):</label>
                <input type="password" id="password" name="password" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$" title="Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number." required value={formData.password} onChange={handleChange} />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />

                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>} {/* Display the message if it's available */}
        </div>
    );
};

export default UserRegistrationForm;

