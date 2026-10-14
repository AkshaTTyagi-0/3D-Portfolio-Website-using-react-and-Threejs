import React from 'react'
import Tilt from 'react-parallax-tilt'
import {motion} from 'framer-motion';

import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}
      
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
      variants={fadeIn("","",0.1,1)}
      className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hello, This is my first 3d website, its showcasing my 
        experience in javascript, tailwind.css and other utilities.
        My hobbies are playing video game and photography.
      </motion.p>

    </>
  )
}

export default About