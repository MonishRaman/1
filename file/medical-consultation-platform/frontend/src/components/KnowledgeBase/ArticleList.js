import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Article from './Article';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('/api/articles');
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <h2>Knowledge Base</h2>
      {articles.map((article) => (
        <Article key={article._id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
