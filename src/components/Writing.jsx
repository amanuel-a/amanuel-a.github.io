import React from 'react';
import './Writing.css';

const Writing = () => {
  const articles = [
    {
      title: "The Future of Design Systems",
      excerpt: "How design systems are evolving to meet the needs of modern product teams and what this means for designers.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Design Systems"
    },
    {
      title: "Building High-Performing Design Teams",
      excerpt: "Lessons learned from scaling design teams at fast-growing companies and the frameworks that work.",
      date: "February 28, 2024",
      readTime: "12 min read",
      category: "Leadership"
    },
    {
      title: "User Research in the Age of AI",
      excerpt: "How artificial intelligence is changing the way we conduct user research and what it means for UX designers.",
      date: "January 20, 2024",
      readTime: "6 min read",
      category: "Research"
    },
    {
      title: "Designing for Accessibility at Scale",
      excerpt: "Practical strategies for implementing accessibility best practices across large product organizations.",
      date: "December 10, 2023",
      readTime: "10 min read",
      category: "Accessibility"
    }
  ];

  return (
    <section id="writing" className="writing">
      <div className="container">
        <div className="section-header">
          <h2>Writing</h2>
          <p>Thoughts on design, leadership, and building great products</p>
        </div>
        <div className="articles-grid">
          {articles.map((article, index) => (
            <article key={index} className="article-card">
              <div className="article-meta">
                <span className="category">{article.category}</span>
                <span className="date">{article.date}</span>
              </div>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <div className="article-footer">
                <span className="read-time">{article.readTime}</span>
                <a href="#" className="read-more">Read More →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writing;