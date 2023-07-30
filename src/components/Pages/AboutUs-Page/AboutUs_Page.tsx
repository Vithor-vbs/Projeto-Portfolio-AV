import { HeaderSection } from "../../HeaderSection";
import "./AboutUs_Page.css";
import { HeaderAboutUs } from "./HeaderAboutUs";
import { WhoAreWeSection } from "./WhoAreWeSection";

export function AboutUs_Page() {
  return (
    <div>
      <HeaderSection pageIndex="aboutUs" />
      <HeaderAboutUs />
      <WhoAreWeSection />
    </div>
  );
}
