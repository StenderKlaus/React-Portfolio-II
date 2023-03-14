import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import project1 from "../images/project1.jpg";
import project2 from "../images/project2.jpg";

const Services = () => {
  const serviceList = [
    {
      id: 1,
      name: "Frontend",
      // imageUrl: project2,
    },
    {
      id: 2,
      name: "Backend",
      imageUrl: project1,
    },

  ];

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
      <div className="services">
        <h2>Services</h2>
        <div className="wrapper">
          {serviceList.map((item) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 1, ease: "easeInOut" },
                }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
              >
                 <Card>
                  <Card.Img variant="top" src={item.imageUrl} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <ul>
                      <li> HTML</li>
                      
                    </ul>
                  </Card.Body>
                </Card> 


              </motion.div>
              
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};




export default Services;
