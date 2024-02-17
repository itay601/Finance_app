import React, { useState } from 'react';

const Article = () => {
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
      <label htmlFor="company">Choose a Company:</label>
                <select id="company" name="company">
                    <option value="AAPL">Apple</option>
                    <option value="MSFT">Microsoft</option>
                    <option value="AMZN">Amazon</option>
                    <option value="GOOGL">Google</option>
                    <option value="FB">Facebook</option>
                    <option value="TSLA">Tesla</option>
                    <option value="JNJ">Johnson & Johnson</option>
                    <option value="JPM">JPMorgan Chase</option>
                    <option value="V">Visa</option>
                    <option value="PG">Procter & Gamble</option>
                    <option value="SBUX">Starbucks</option>
                    <option value="COST">Costco</option>
                    <option value="PEP">PepsiCo</option>
                    <option value="CMCSA">Comcast</option>
                    <option value="MAR">Marriott International</option>
                    <option value="BKNG">Booking Holdings</option>
                    <option value="DLTR">Dollar Tree</option>
                    <option value="AVGO">Broadcom</option>
                    <option value="TMUS">T-Mobile US</option>
                    <option value="KHC">Kraft Heinz</option>
                </select>
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

export default Article;