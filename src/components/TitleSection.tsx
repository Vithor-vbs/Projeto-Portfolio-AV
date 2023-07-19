import { DescriptionSection } from "./DescriptionSection";
import "./TitleSection.css";

export function TitleSection() {
  return (
    <section className="title-section">
      <div className="title-description-box">
        <div className="title-container">
          <span className="title-first-line">inspirando inovação,</span>
          <span className="title-sec-line">
            entregando <span className="glow-text">resultados.</span>
          </span>
        </div>
        <DescriptionSection />
      </div>
    </section>
  );
}
