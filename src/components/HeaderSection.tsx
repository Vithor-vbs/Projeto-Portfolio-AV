import "./HeaderSection.css";
import vbsName from "../assets/VBS white logo.png";
import { Link } from 'react-router-dom';


export function HeaderSection() {
  return (
    <section className="header-section">
      <div className="header-container">
        <a href="/">
          <img
            className="header-main-image"
            src={vbsName}
            alt="vbs agency name"
          />
        </a>
          {/* <img
            className="header-main-image"
            src={vbsName}
            alt="vbs agency name"
          /> */}
        <div className="header-properties-box">
          <Link to="./Pages/Projects/index.tsx" className="properties-name">projects</Link>
          <Link to="/aboutUs" className="properties-name">about us</Link>
          <Link to="/careers" className="properties-name">careers</Link>
        </div>
        <Link to="/contact" className="properties-name">contact us</Link>
      </div>
    </section>
  );
}

