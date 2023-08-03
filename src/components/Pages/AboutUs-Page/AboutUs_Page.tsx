import { HeaderSection } from "../../HeaderSection";
import styles from "./AboutUs_Page.module.css";
import { HeaderAboutUs } from "./HeaderAboutUs";
import { WhoAreWeSection } from "./OurInfo/WhoAreWeSection";

import { motion } from "framer-motion";

export function AboutUs_Page() {
  return (
    <motion.div
      className={styles["background-setter"]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <HeaderSection pageIndex="aboutUs" />
      <HeaderAboutUs />
      <WhoAreWeSection />
    </motion.div>
  );
}
