import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import './Work.css';

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-commerce Mobile App",
      category: "mobile",
      description: "A modern e-commerce app with seamless user experience and intuitive navigation.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["UI Design", "Mobile", "E-commerce"],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Banking Dashboard",
      category: "web",
      description: "Clean and secure banking interface with advanced data visualization.",
      image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Dashboard", "Fintech", "UX"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Healthcare Platform",
      category: "web",
      description: "Comprehensive healthcare management system for patients and doctors.",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Healthcare", "Web App", "UX Research"],
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Travel Booking App",
      category: "mobile",
      description: "Beautiful travel app with immersive booking experience and social features.",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Travel", "Mobile", "Social"],
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Design System",
      category: "system",
      description: "Comprehensive design system with components, tokens, and guidelines.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Design System", "Components", "Documentation"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "AI Assistant Interface",
      category: "web",
      description: "Conversational AI interface with natural language processing capabilities.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["AI", "Chat Interface", "Innovation"],
      color: "from-teal-500 to-blue-500"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'system', label: 'Design Systems' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="work" className="work" ref={ref}>
      <div className="work-container">
        <motion.div 
          className="work-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">
            Explore my latest projects and case studies
          </p>
        </motion.div>

        <motion.div 
          className="filter-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              className={`filter-tab ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="projects-grid"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              layout
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className={`project-overlay bg-gradient-to-br ${project.color}`}>
                  <div className="project-actions">
                    <motion.button 
                      className="action-btn"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.button>
                    <motion.button 
                      className="action-btn"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.button>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <motion.a 
                  href="#" 
                  className="project-link"
                  whileHover={{ x: 5 }}
                >
                  View Case Study <ArrowRight size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;