import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <motion.div 
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-content">
          <motion.div 
            className="hero-badge"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles size={16} />
            <span>Available for new projects</span>
          </motion.div>

          <motion.h1 
            className="hero-title"
            variants={itemVariants}
          >
            Crafting Digital
            <span className="gradient-text"> Experiences</span>
            <br />
            That Inspire
          </motion.h1>

          <motion.p 
            className="hero-description"
            variants={itemVariants}
          >
            I'm a passionate UI/UX designer who transforms complex problems into 
            elegant, user-centered solutions. Let's create something extraordinary together.
          </motion.p>

          <motion.div 
            className="hero-cta"
            variants={itemVariants}
          >
            <motion.a 
              href="#work" 
              className="btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a 
              href="#contact" 
              className="btn-secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          variants={itemVariants}
        >
          <motion.div 
            className="floating-card card-1"
            variants={floatingVariants}
            animate="animate"
          >
            <div className="card-content">
              <div className="card-icon">🎨</div>
              <h3>UI Design</h3>
            </div>
          </motion.div>
          
          <motion.div 
            className="floating-card card-2"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '2s' }}
          >
            <div className="card-content">
              <div className="card-icon">⚡</div>
              <h3>UX Research</h3>
            </div>
          </motion.div>
          
          <motion.div 
            className="floating-card card-3"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '4s' }}
          >
            <div className="card-content">
              <div className="card-icon">🚀</div>
              <h3>Prototyping</h3>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;