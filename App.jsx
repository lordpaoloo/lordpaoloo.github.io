import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPython, FaJs, FaHtml5, FaCss3, FaCode, FaSun, FaMoon } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [darkMode, setDarkMode] = useState(false);

  const projects = [
    {
      title: "Fun Task Manager 🎮",
      description: "A playful task management app that makes organizing fun!",
      technologies: ["Python", "Qt", "SQLite"],
      challenges: ["Making boring tasks exciting", "Adding game elements", "Creating fun animations"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      feedback: "Users say: Best task manager ever! 🌟"
    },
    {
      title: "Code Ninja Tool 🥷",
      description: "Slice through bugs like a coding ninja!",
      technologies: ["C++", "LLVM", "JavaScript"],
      challenges: ["Ninja-style animations", "Stealthy bug detection", "Lightning-fast performance"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      feedback: "This tool is legendary! - Happy Developers 🎯"
    },
    {
      title: "Inventory Party System 🎪",
      description: "Who said inventory management cannot be fun?",
      technologies: ["Python", "PostgreSQL", "PyQt"],
      challenges: ["Making spreadsheets exciting", "Fun data visualization", "Party mode features"],
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d",
      feedback: "Best way to count stuff! 🎈"
    },
    {
      title: "Magic File Manager ✨",
      description: "Files disappear and reappear like magic!",
      technologies: ["C++", "Qt", "SQLite"],
      challenges: ["Adding sparkle effects", "Magic transitions", "Fun organization"],
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a",
      feedback: "It is like having a magic wand! 🪄"
    }
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter(project =>
    project.technologies.includes(filter)
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-background text-foreground"}`}>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 p-3 rounded-full bg-primary text-white z-50"
      >
        {darkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
      </motion.button>

      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <motion.img
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
            src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4"
            alt="Developer Profile"
            className="rounded-full w-48 h-48 object-cover mx-auto md:mx-0 border-4 border-primary"
          />
        </div>
        <div className="w-full md:w-1/2">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text">John the Code Wizard 🧙‍♂️</motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xl">Turning coffee ☕ into code and bugs into features! Creating magical software solutions that make people smile! ✨</motion.p>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={`${darkMode ? "bg-gray-800" : "bg-card"} py-16`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Magic Spells (Tech Skills) 🔮</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring" }}>
              <h3 className="text-2xl font-semibold mb-4">Spell Books 📚</h3>
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ y: -5, rotate: 5 }} className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full">
                  <FaPython className="text-xl" /> Python
                </motion.div>
                <motion.div whileHover={{ y: -5, rotate: -5 }} className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full">
                  <SiCplusplus className="text-xl" /> C++
                </motion.div>
                <motion.div whileHover={{ y: -5, rotate: 5 }} className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full">
                  <FaJs className="text-xl" /> JavaScript
                </motion.div>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring" }}>
              <h3 className="text-2xl font-semibold mb-4">Enchanted Scrolls 📜</h3>
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ y: -5, rotate: -5 }} className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full">
                  <FaHtml5 className="text-xl" /> HTML
                </motion.div>
                <motion.div whileHover={{ y: -5, rotate: 5 }} className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full">
                  <FaCss3 className="text-xl" /> CSS
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className={`${darkMode ? "bg-gray-800" : "bg-card"} py-16"}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Send me a Magic Message! ✉️</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            <motion.a 
              whileHover={{ scale: 1.1, rotate: 5 }}
              href="mailto:john@example.com" 
              className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-purple-500 transition-colors">
              <FaEnvelope /> Email Me
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, rotate: -5 }}
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-purple-500 transition-colors">
              <FaLinkedin /> Connect
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, rotate: 5 }}
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-purple-500 transition-colors">
              <FaGithub /> Code Magic
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;