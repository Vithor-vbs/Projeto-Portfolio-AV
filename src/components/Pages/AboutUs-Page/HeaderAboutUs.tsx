import styles from "./HeaderAboutUs.module.css";
import { motion } from "framer-motion";

export const HeaderAboutUs = () => {
  return (
    <section className={styles["about-us-section"]}>
      <motion.div
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
      </motion.div>
    </section>
  );
};
