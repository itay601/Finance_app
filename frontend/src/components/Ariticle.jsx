import React, { useState } from 'react';

const NewsComponent = () => {
  const [articles, setArticles] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const companyName = formData.get('company_name');
    const limit = formData.get('limit');

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ company_name: companyName, limit: limit })
    };

    try {
      const response = await fetch('http://localhost:5000/news/article', requestOptions);
      const data = await response.json();
      console.log(data)
      setArticles(data.articles);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  return (
    <div>
      <h1>Fetch News Articles</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="company_name">Company Name:</label>
        <input type="text" id="company_name" name="company_name" required />
        <label htmlFor="limit">Limit:</label>
        <input type="number" id="limit" name="limit" required />
        <button type="submit">Fetch Articles</button>
      </form>
      <div>
        {articles.map((article, index) => (
          <div key={index}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <a href={article.link}>Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsComponent;