import { motion } from "framer-motion";
import useSectionInView from "../hooks/useSectionInView";

const About = () => {
  const { ref, isInView } = useSectionInView();

  const skills = [
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Python",
    "SQL",
    "Git",
    "AWS",
    "Docker",
  ];

  return (
    <section id="about" ref={ref} className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="about-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            About
          </motion.h2>

          <motion.div
            className="about-description-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="about-description">
              I'm a software engineer passionate about creating clean, efficient
              solutions. I focus on building user-centered applications that
              solve real problems.
            </p>
            <p className="about-description">
              When I'm not coding, I enjoy exploring new technologies and
              contributing to open-source projects. I believe in writing
              maintainable code and creating experiences that matter.
            </p>
          </motion.div>

          <motion.div
            className="about-skills-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="about-skills-title">Technologies</h3>
            <div className="about-skills-list">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="about-skill"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{
                    duration: 0.3,
                    delay: 0.4 + index * 0.05,
                  }}
                  whileHover={{
                    backgroundColor: "#f0f0f0",
                    color: "#333",
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="btn"
              whileHover={{ backgroundColor: "#444" }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
