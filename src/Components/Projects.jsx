import React from "react";
import p1 from "../Assets/image 1.svg";
import p2 from "../Assets/p2.svg";
import {motion} from 'framer-motion'
;
const Projects = () => {
  return (
    <div className="projects">
      <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}}>Projects</motion.h2>
      <div className="grid mar-b">
        <motion.div className="col-6" whileInView={{ opacity: 1, x: 0 }}
initial={{ opacity: 0, x: -100 }}
transition={{ duration: 1 }}>
          <img src={p1} alt="" />
        </motion.div>
        <motion.div className="col-6" whileInView={{ opacity: 1, x: 0 }}
initial={{ opacity: 0, x: 100 }}
transition={{ duration: 1 }} >
            <h3>Grocery Ecommerce</h3>
            <p className="descp">SmileShop is a comprehensive grocery e-commerce platform developed using React.js, designed to provide users with a seamless online shopping experience. The platform offers a wide range of grocery products, including fresh produce, dairy, bakery items, household supplies, and more. The application aims to simplify grocery shopping by offering a user-friendly interface.</p>
        </motion.div>
      </div>
      <div className="grid mar-b">
        <motion.div className="col-6" whileInView={{ opacity: 1, x: 0 }}
initial={{ opacity: 0, x: -100 }}
transition={{ duration: 1 }}>
          <img src={p2} alt="" />
        </motion.div>
        <motion.div className="col-6" whileInView={{ opacity: 1, x: 0 }}
initial={{ opacity: 0, x: 100 }}
transition={{ duration: 1 }} >
            <h3>Personal Portfolio</h3>
            <p className="descp">MyPortfolio is a dynamic and responsive personal portfolio website developed using React.js. This project is designed to help individuals showcase their skills, projects, experiences, and achievements in a professional manner. The platform offers a clean and modern interface, ensuring that the portfolio stands out to potential employers, clients, or collaborators.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
