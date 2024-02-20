import React, { useState, useEffect } from 'react';

const BlogContent = () => {
  const [posts, setContent] = useState([]);
  

  const getMessage = async () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    };

    try {
      const response = await fetch('/blog/content', requestOptions);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setContent(data.content);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  useEffect(() => {
    getMessage();
  }, []);

  return (
    <div>
      <h1>Fetch News Post</h1>
      <div>
        {posts.map((post, index) => (
          <div key={index}>
            <h3>{post.created_at}</h3>
            <h5>{post.name}</h5>
            <h6>{post.title}</h6>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default BlogContent;