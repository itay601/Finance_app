import React, { useState } from 'react';

const ResetPass = () => {
  const [Email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ Email })
      };
      console.log({Email})

      const response = await fetch('/users/reset_password', requestOptions);
      const data = await response.json();
      console.log(response)
      console.log(data)
      

      setMessage(data.message); // Set the message from the response
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={Email} onChange={handleChange} />

        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>} {/* Display the message if it's available */}
    </div>
  );
};

export default ResetPass;