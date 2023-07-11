import "./App.css";
import { HeaderSection } from "./components/HeaderSection";
import { TitleSection } from "./components/TitleSection";
import { VideoTest } from "./components/VideoTest";

export function App() {
  return (
    <div className="App">
      <HeaderSection />
      <TitleSection />

      <VideoTest />
    </div>
  );
}
