import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import project1 from "../images/project1.jpg";
import project2 from "../images/project2.jpg";
import project3 from "../images/project3.jpg";
import project4 from "../images/project4.jpg";
import project5 from "../images/project5.jpg";
import project6 from "../images/project6.jpg";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      name: " Tribute Page über Glenn Miller",
      imageUrl: project1,
      githubURL: "https://github.com/StenderKlaus/newtribute",
    },
    {
      id: 2,
      name: "Erstes Portfolio",
      imageUrl: project2,
      githubURL: "https://portfolio-ks.vercel.app/#home",
    },
    {
      id: 3,
      name: "Semicolons - Linksammlung",
      imageUrl: project3,
      githubURL: "https://github.com/MarcelVoigt92/The-Semicolons-Link-Sammlung",
    },
    {
      id: 4,
      name: "Cooking App",
      imageUrl: project4,
      githubURL: "https://github.com/StenderKlaus/lecook---cooking-App",
    },
    {
      id: 5,
      name: "Musik Player App",
      imageUrl: project5,
      githubURL: "https://github.com/Hosam89/GIGA-CHAD",
    },
    {
      id: 6,
      name: "React Weather App",
      imageUrl: project6,
      githubURL: "https://github.com/StenderKlaus/Weather_APP/upload",
    },
  ];

  return (
    <motion.div
      animate={{
        scale: [2, 1],
        rotate: [90, 0],
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="projects"
    >
      <h2>Projects</h2>
      <div className="wrapper">
        {projectList.map((item) => {
          return (
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
              }}
              key={item.id}
            >
              <a href={item.githubURL} target="_blank" rel="noreferrer">
              <Card >
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                </Card.Body>
                
              </Card>
              </a>
              
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;