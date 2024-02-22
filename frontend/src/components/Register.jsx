import React, { useState } from 'react';

const UserRegistrationForm = () => {
  const [formData, setFormData] = useState({
    id_ : '',
    username : '',
    email : '',
    password : ''
  });
  const [message, setMessage] = useState('');

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
      console.log(JSON.stringify(formData))

      const response = await fetch('/users/register', requestOptions);
      const data = await response.json();
      console.log(response.json)
      console.log(data.msg)  



      setMessage(data.msg); // Set the message from the response
      if (data.msg === 'register successfuly') {
        setFormData({
          id_: '',
          username: '',
          email: '',
          password: ''
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID:</label>
        <input type="number" id="id" name="id_" inputMode="numeric" value={formData.id_} onChange={handleChange} />

        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>} {/* Display the message if it's available */}
    </div>
  );
};

export default UserRegistrationForm;