import React, { useState, useEffect } from 'react';

const CreateBlog = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    name: '',
    title: '',
    body: ''
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/blog/content');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setPosts(data.content);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const createPost = async () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    };

    try {
      const response = await fetch('/blog/create_post', requestOptions);
      if (!response.ok) {
        throw new Error('Failed to create post');
      }
      const data = await response.json();
      console.log('Post created:', data);
      fetchPosts(); // Refresh posts after creating a new one
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <h1>Create New Post</h1>
      <div>
        <input type="text" name="name" value={newPost.name} onChange={handleChange} placeholder="Name" />
        <input type="text" name="title" value={newPost.title} onChange={handleChange} placeholder="Title" />
        <textarea name="body" value={newPost.body} onChange={handleChange} placeholder="Body"></textarea>
        <button onClick={createPost}>Create Post</button>
      </div>
      <hr />
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

export default CreateBlog;