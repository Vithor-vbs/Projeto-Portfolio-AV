import "./HeaderSection.css";
import vbsName from "../assets/VBS white logo.png";

export function HeaderSection() {
  return (
    <section className="header-section">
      <div className="header-container">
        <img
          className="header-main-image"
          src={vbsName}
          alt="vbs agency name"
        />
        <div className="header-properties-box">
          <a href="#" className="properties-name">
            projetos
          </a>
          <a href="#" className="properties-name">
            about us
          </a>
          <a href="#" className="properties-name">
            careers
          </a>
        </div>
        <a href="#" className="properties-name">
          contate-nos
        </a>
      </div>
    </section>
  );
}
