import React, { useState } from 'react';

const Article = () => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const selectedCompany = formData.get("company");
        const limit = parseInt(formData.get("limit"));

        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };

        try {
            const response = await fetch(`/news/article?company=${selectedCompany}&limit=${limit}`, requestOptions);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to fetch articles');
            }
            
            setArticles(data.articles);
            setError(null);
        } catch (error) {
            setError(error.message);
            setArticles([]);
        }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div>
            <h1>Article Fetcher</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="company">Choose a Company:</label>
                <select id="company" name="company">
                    <option value="AAPL">Apple</option>
                    <option value="MSFT">Microsoft</option>
                    {/* Add more options if needed */}
                </select>
                <label htmlFor="limit">Limit:</label>
                <input type="number" id="limit" name="limit" required />
                <button type="submit">Fetch Articles</button>
            </form>
            {error && <p>Error: {error}</p>}
            {articles.length > 0 && (
                <div>
                    <h2>Articles:</h2>
                    {articles.map((article, index) => (
                        <div key={index}>
                            <h3>{formatDate(article.date)}</h3>
                            <h4>{article.title}</h4>
                            <p>{article.content}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Article;