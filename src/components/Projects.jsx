import { motion } from "framer-motion";
import useSectionInView from "../hooks/useSectionInView";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const { ref, isInView } = useSectionInView();

  const projects = [
    {
      id: 1,
      title: "STGMA Apparel",
      description:
        "A resource hub and apparel company dedicated to spreading awareness and breaking the stigmas against mental health. Combines e-commerce functionality with educational content.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      liveUrl: "https://stgma.vercel.app",
      githubUrl: "https://github.com/JaellyBean/STGMA",
    },
    {
      id: 2,
      title: "Bennu",
      description:
        "A comprehensive task management application with features for task creation, editing, deletion, and calendar view to help users stay organized and manage their time effectively.",
      technologies: ["React", "TypeScript", "CSS", "Local Storage"],
      liveUrl: "https://bennutasks.app",
      githubUrl: "https://github.com/JaellyBean/bennu",
    },
  ];

  return (
    <section id="projects" ref={ref} className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="projects-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Projects
          </motion.h2>

          <motion.p
            className="projects-description"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Selected work showcasing my approach to building meaningful
            applications.
          </motion.p>

          <div className="grid grid-2 projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="card project-card"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <motion.h3 className="project-title">{project.title}</motion.h3>
                <motion.p className="project-description">
                  {project.description}
                </motion.p>
                <motion.div className="project-tech-list">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="project-tech">
                      {tech}
                    </span>
                  ))}
                </motion.div>
                <motion.div className="project-links">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    whileHover={{ backgroundColor: "#444" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    whileHover={{ backgroundColor: "#222", color: "white" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="projects-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="btn"
              whileHover={{ backgroundColor: "#444" }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
