import "./AboutSection.css";
import { AboutDescription } from "./AboutDescription";
import { ButtonCTA } from "./ButtonCTA";

export function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h1 className="about-main-name">
          <span>nós</span>
          <span>simplificamos</span>
          <span>seu</span>
          <span>negócio</span>
          <span>digital</span>
        </h1>
        <div>
          <AboutDescription />
          <ButtonCTA />
        </div>
      </div>
    </section>
  );
}
