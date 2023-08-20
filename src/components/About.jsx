import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import dp from "../assets/mydp.jpeg";
// ========================================================
// PARENT COMPONENT FOR CARDS CONTAINING SERVICES

const ServiceCard = ({ index, title, icon }) => {
  return (
    // TILT IS FOR CARDS
    <Tilt className="xs:w-[200px] w-full">
      <motion.div
        // direction, type, delay, duration
        variants={fadeIn("right", "spring", 0.5 * index, 0.8)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] 
        shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
        flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-15px font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
// ===================================================
const Myprofile = ({ dp }) => {
  return (
    // TILT IS FOR CARDS
    <Tilt className="xs:w-[200px] w-full ">
      <motion.div
        // direction, type, delay, duration
        variants={fadeIn("right", "spring", 0.5, 0.8)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] 
        shadow-card"
      >
        <div
          options={{ max: 50, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-2 px-2 min-h-[300px]
        flex justify-evenly items-center flex-col"
        >
          <img src={dp} alt={dp} className=" h-full0 w-full object-contain" />
          <h3 className="text-white text-15px font-bold text-center">
            Ali Murad
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
// ======================================================
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction </p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      {/* ============= DP================== */}
      <div className="mt-20 flex flex-wrap gap-10">
        <Myprofile dp={dp} />
      </div>
      {/* paragarph intro */}
      {/* direction, type, delay, duration */}
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="max-w-3xl mt-5">
        Meet Ali Murad, a self-taught MERN stack developer with 3+ years of
        JavaScript and web development expertise. Proficient in React.js,
        Node.js, Express.js, and even Three.js for 3D web magic, Ali
        collaborates closely with clients to craft efficient, scalable, and
        user-friendly solutions that tackle real-world challenges.From pixel to
        code, Ali weaves magic that doesn't just meet but exceeds real-world
        expectations. Are you ready to transform your ideas into digital
        realities?, Ali Murad is the rigt choice for you
      </motion.p>

      {/* ================================ */}
      {/* CODE FOR FETCHING AND SENDING SERVICES DATA TO PARENT COMPONET */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
