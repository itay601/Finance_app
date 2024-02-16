import React, { useState } from 'react';
import axios from 'axios';

const Article = () => {
    const [articles, setArticles] = useState([]);
    const [companyName, setCompanyName] = useState('');
    const [limit, setLimit] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null); // Clear any previous errors
        try {
            const response = await axios.get(`/news/article?company_name=${companyName}&limit=${limit}`);
            setArticles(response.data.articles);
        } catch (error) {
            console.error('Error fetching articles:', error);
            setError('Error fetching articles. Please try again later.');
        }
    };
    console.log(articles)
    console.log(companyName)
    console.log(limit)

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'companyName') {
            setCompanyName(value);
        } else if (name === 'limit') {
            setLimit(value);
        }
    };

    return (
        <div>
            <h1>Fetch Articles</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="company">Choose a Company:</label>
            <select id="company" name="company" value={companyName} onChange={handleChange} required>
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
                <input type="number" id="limit" name="limit" value={limit} onChange={handleChange} required />
                <button type="submit">Fetch Articles</button>
            </form>
            {error && <p className="error">{error}</p>}
            <div>
                <h2>Articles</h2>
                <ul>
                    {articles.map((article, index) => (
                        <li key={index}>
                            <strong>{article.title}</strong>
                            <p>{article.content}</p>
                            <a href={article.link}>Read more</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Article;