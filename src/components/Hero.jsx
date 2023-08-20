import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import cv from "../assets/resume.pdf";

const Hero = () => {
  const cvFileUrl = cv; // Replace with the actual URL
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* MAIN DIV CONTAINING ALL HERO SECTION  */}
      <div
        className={`${styles.paddingX} absolute inset-0
      top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        {/* CONTAINER FOR VERTICAL PINK LINE */}
        <div className="flex flex-col justify-center items-center mt-5 top-[200px]">
          <div className="w-5 h-5 rounded-full  bg-purple-600"></div>
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-purple-600 " />
        </div>
        {/*  CONTAINER FOR TEXT BODY */}
        <div className="relative bottom-3">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-purple-600">ALi Murad</span>
          </h1>
          {/* INTRODUCTION   */}
          <p
            className={`${styles.heroSubText} mt-3 
                  text-white `}
          >
            I Develop 3D Visuals, user inrerfaces{" "}
            <br className="sm:block hidden" /> and web apps using MERN Stack
          </p>
        </div>
      </div>
      {/* imported from /components/canvas/computers */}

      <ComputersCanvas />

      <div className="absolute flex flex-wrap w-[50%] justify-center bottom-[340px]  ">
        <a href={cvFileUrl} download className="cursor-pointer inset-96">
          <button className="bg-gradient-to-r from-blue-500 to-green-500 p-2 text-black rounded-md">
            Download CV
          </button>
        </a>
      </div>
      {/* ANOTHER COMPONENT  */}
      <div
        className="absolute xs:bottom-10 
      bottom-32 w-full flex justify-center items-center"
      >
        <a href="#about">
          {/* code for rounded shap button in center  */}
          <div
            className="w-[35px] h-[65px] rounded-3xl border-4
             border-gray-300 flex justify-center 
             items-start p-2"
          >
            {/* USING FRAMER MOTION FOR UP AND DOWN MOTION   */}

            <motion.dev
              animate={{
                y: [0, 23, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-purple-800 items-center"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
