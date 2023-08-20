import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
const SectionWrapper = (Component, idName) =>
  // a function inisde another function that do
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto
      relative z-0`}
      >
        {/* SPAN I JUST AN EMPTY SPACE SO WHEN WE CLICK ON BUTTON IT SHOUDL TAKES US DIRECTLY TO ABOUT COMPONENT WHER WE PASSED #ABOUT ID */}
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
