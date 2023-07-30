import "./DescriptionSection.css";

import { motion } from "framer-motion";

export function DescriptionSection() {
  return (
    <motion.section
      className="description-section"
      animate={{ x: 100 }}
      transition={{ duration: 1 }}
    >
      <p className="description-section-title">nós criamos soluções</p>
      <p className="description-section-title">que movem o mundo</p>
      <p className="description-section-title"> digital.</p>
    </motion.section>
  );
}
