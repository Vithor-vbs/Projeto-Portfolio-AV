import "./HeaderSection.css";
import vbsName from "../assets/VBS white logo.png";
import { Link } from "react-router-dom";

interface HeaderSectionProps {
  pageIndex: string;
}

export function HeaderSection(props: HeaderSectionProps) {
  return (
    <section className="header-section">
      <div className="header-container">
        <a className="home-redirect" href="/">
          <img
            className="header-main-image"
            src={vbsName}
            alt="vbs agency name"
          />
        </a>

        <div className="header-properties-box">
          <Link to="./Pages/Projects/index.tsx" className="properties-name">
            projects
          </Link>
          <Link
            to="/aboutUs"
            className={`properties-name ${
              props.pageIndex === "aboutUs" ? "pageIndex-modified" : ""
            }`}
          >
            about us
          </Link>
          <Link
            to="/careers"
            className={`properties-name ${
              props.pageIndex === "projects" ? "pageIndex-modified" : ""
            }`}
          >
            careers
          </Link>
        </div>
        <Link
          to="/contact"
          className={`properties-name ${
            props.pageIndex === "careers" ? "pageIndex-modified" : ""
          }`}
        >
          contact us
        </Link>
      </div>
    </section>
  );
}
