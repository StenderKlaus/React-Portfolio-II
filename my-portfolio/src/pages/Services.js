import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";

import html from "../images/logo/html64.png";
import css from "../images/logo/css.png";
import gh from "../images/logo/gh.png";
import bt from "../images/logo/bt.png";
import js from "../images/logo/js.png";
import node from "../images/logo/node.png";
import sass from "../images/logo/sass.png";
import lreact from "../images/logo/lreact.png";
import firebase from "../images/logo/firebase.png";
import express from "../images/logo/express.png";
import mongoDB from "../images/logo/mongodb.png";
import mysql from "../images/logo/mysql.png";
import jest from "../images/logo/jest.png";
import git from "../images/logo/git.png";
import tailwind from "../images/logo/tailwind.png";

const Services = () => {
  const serviceList = [
    {
      id: 1,
      list: "Liste",
      name: "Frontend",
      imageUrl: [html, css, gh, bt, js, node, sass, lreact, git, tailwind]
      
    },
    {
      id: 2,
      list: "Liste",
      name: "Backend",
      imageUrl: [firebase, express, mysql, mongoDB, jest]
    },

  ];

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
      <div className="services">
        <h2>Junior-Erfahrung</h2>
        <div className="wrapper ">
          {serviceList.map((item) => {
            return (
              <motion.div className="servicesParent"
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
                 <h2>{item.name}</h2>                 
                  {item.imageUrl.map((logoPics)=> 
                  (
                  <Card className="servicesTitel"> 
                    <Card.Img variant="top" src={logoPics}/>                 
                  </Card> )
                  )}                  
              </motion.div>              
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};




export default Services;
