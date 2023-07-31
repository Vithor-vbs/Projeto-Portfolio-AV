import { HeaderSection } from "./HeaderSection";
import { TitleSection } from "./TitleSection";
import { VideoTest } from "./VideoTest";
import { AboutSection } from "./About-Us/AboutSection";
import { ProjectSection } from "./OurProjects/ProjectSection";

import { motion } from "framer-motion";

export function HomePage() {
  return (
    <motion.div
      initial={{ y: "50%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <HeaderSection pageIndex="home" />
      <TitleSection />
      <VideoTest />
      <AboutSection />
      <ProjectSection />
    </motion.div>
  );
}
