import React from "react";
import { DescriptionSection } from "./DescriptionSection";
import "./TitleSection.css";
import { motion } from "framer-motion";

export function TitleSection() {
  return (
    <section className="title-section">
      <motion.div
        className="title-description-box"
        animate={{ x: 100 }}
        initial={{ x: -100 }}
        transition={{ duration: 2 }}
      >
        <div className="title-container">
          <span className="title-first-line">inspirando inovação,</span>
          <span className="title-sec-line">
            entregando <span className="glow-text">resultados.</span>
          </span>
        </div>
        <DescriptionSection />
      </motion.div>
    </section>
  );
}
