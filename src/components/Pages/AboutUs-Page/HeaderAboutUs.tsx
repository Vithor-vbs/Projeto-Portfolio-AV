import styles from "./HeaderAboutUs.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export const HeaderAboutUs = () => {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 800);
  }, []);

  return (
    <section className={styles["about-us-section"]}>
      <motion.div
        style={{ y }}
        className={styles["about-us-box"]}
        animate={{ x: 700 }}
        initial={{ x: 500 }}
        transition={{ duration: 2 }}
      >
        <p>
          nós <span>criamos</span>,
        </p>
        <motion.p
          animate={{ x: 50 }}
          initial={{ x: -100 }}
          transition={{ duration: 3 }}
        >
          <span>modelamos</span>
        </motion.p>
        <p>
          e <span>inspiramos</span>
        </p>
        {isVisible && <div className={styles["glowing-ball"]} />}
      </motion.div>
    </section>
  );
};
