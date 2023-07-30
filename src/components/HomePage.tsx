import { HeaderSection } from "./HeaderSection";
import { TitleSection } from "./TitleSection";
import { VideoTest } from "./VideoTest";
import { AboutSection } from "./About-Us/AboutSection";
import { ProjectSection } from "./OurProjects/ProjectSection";

import { motion } from "framer-motion";

export function HomePage() {
  return (
    <motion.div
      className="slide-in"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <HeaderSection pageIndex="home" />
      <TitleSection />
      <VideoTest />
      <AboutSection />
      <ProjectSection />
    </motion.div>
  );
}
