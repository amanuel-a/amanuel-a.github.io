import React from 'react';
import './Speaking.css';

const Speaking = () => {
  const talks = [
    {
      title: "The Evolution of Design Leadership",
      event: "Design + Research Conference",
      location: "San Francisco, CA",
      date: "2024",
      description: "Exploring how design leadership has evolved and what the future holds for design organizations."
    },
    {
      title: "Building Design Systems That Scale",
      event: "UX Week",
      location: "New York, NY",
      date: "2023",
      description: "A deep dive into creating design systems that can grow with your organization and product needs."
    },
    {
      title: "UX & Growth Podcast",
      event: "Weekly Podcast",
      location: "Remote",
      date: "Ongoing",
      description: "Co-hosting a weekly podcast about the intersection of user experience and business growth."
    }
  ];

  return (
    <section id="speaking" className="speaking">
      <div className="container">
        <div className="section-header">
          <h2>Speaking</h2>
          <p>Sharing insights at conferences and events worldwide</p>
        </div>
        <div className="talks-list">
          {talks.map((talk, index) => (
            <div key={index} className="talk-item">
              <div className="talk-content">
                <h3>{talk.title}</h3>
                <div className="talk-details">
                  <span className="event">{talk.event}</span>
                  <span className="location">{talk.location}</span>
                  <span className="date">{talk.date}</span>
                </div>
                <p>{talk.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="speaking-cta">
          <h3>Interested in having me speak at your event?</h3>
          <p>I love sharing insights about design, leadership, and building great products.</p>
          <a href="#contact" className="btn-primary">Get In Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Speaking;