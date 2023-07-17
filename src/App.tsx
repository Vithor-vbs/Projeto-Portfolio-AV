import "./App.css";
import { HeaderSection } from "./components/HeaderSection";
import { TitleSection } from "./components/TitleSection";
import { VideoTest } from "./components/VideoTest";
import { AboutSection } from "./components/About-Us/AboutSection";
import { ProjectSection } from "./components/OurProjects/ProjectSection";

export function App() {
  return (
    <div className="App">
      <HeaderSection />
      <TitleSection />
      <VideoTest />
      <AboutSection />
      <ProjectSection />
    </div>
  );
}
