import React from 'react';
import './Work.css';

const Work = () => {
  const projects = [
    {
      title: "Chrome Browser Experience",
      company: "Google",
      description: "Led the design of key Chrome features used by billions of users worldwide, focusing on performance and accessibility.",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["UX Design", "Product Strategy", "User Research"]
    },
    {
      title: "Growth Platform",
      company: "HubSpot",
      description: "Designed and launched growth tools that helped increase user engagement by 40% and improved conversion rates.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Growth Design", "A/B Testing", "Analytics"]
    },
    {
      title: "Payment Experience",
      company: "Square",
      description: "Reimagined the payment flow for small businesses, resulting in a 25% reduction in transaction time.",
      image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Fintech", "Mobile Design", "User Testing"]
    },
    {
      title: "Pet Care Platform",
      company: "Petbrosia",
      description: "Created a comprehensive pet care platform that connects pet owners with veterinarians and care services.",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Healthcare", "Mobile App", "Service Design"]
    }
  ];

  return (
    <section id="work" className="work">
      <div className="container">
        <div className="section-header">
          <h2>Work</h2>
          <p>Selected projects from my time at leading tech companies</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <div className="project-company">{project.company}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;