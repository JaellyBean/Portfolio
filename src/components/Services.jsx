import { motion } from "framer-motion";
import useSectionInView from "../hooks/useSectionInView";
import { Code, Smartphone, Globe, Database, Zap, Shield } from "lucide-react";

const Services = () => {
  const { ref, isInView } = useSectionInView();

  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Building modern, responsive web applications using React, TypeScript, and Node.js.",
      icon: Code,
      color: "#007acc",
    },
    {
      id: 2,
      title: "Mobile Development",
      description:
        "Developing cross-platform mobile applications using React Native and modern frameworks.",
      icon: Smartphone,
      color: "#34c759",
    },
    {
      id: 3,
      title: "Full-Stack Solutions",
      description:
        "End-to-end development from database design to frontend implementation.",
      icon: Globe,
      color: "#ff6b35",
    },
    {
      id: 4,
      title: "Database Design",
      description:
        "Designing efficient database schemas using SQL and NoSQL databases.",
      icon: Database,
      color: "#8e44ad",
    },
    {
      id: 5,
      title: "Performance Optimization",
      description:
        "Optimizing application performance through code refactoring and best practices.",
      icon: Zap,
      color: "#f39c12",
    },
    {
      id: 6,
      title: "Security Implementation",
      description:
        "Implementing robust security measures including authentication and data protection.",
      icon: Shield,
      color: "#e74c3c",
    },
  ];

  return (
    <section id="services" ref={ref} className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="services-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Services
          </motion.h2>

          <motion.p
            className="services-description"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive software development services to bring your ideas to
            life.
          </motion.p>

          <div className="grid grid-2 services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="card service-card"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <motion.div
                  className="service-icon-wrapper"
                  whileHover={{ scale: 1.05 }}
                >
                  <service.icon size={24} style={{ color: service.color }} />
                </motion.div>
                <motion.h3 className="service-title">{service.title}</motion.h3>
                <motion.p className="service-description">
                  {service.description}
                </motion.p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="services-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
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

export default Services;
