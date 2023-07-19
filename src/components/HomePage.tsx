import { HeaderSection } from "./HeaderSection";
import { TitleSection } from "./TitleSection";
import { VideoTest } from "./VideoTest";
import { AboutSection } from "./About-Us/AboutSection";
import { ProjectSection } from "./OurProjects/ProjectSection";

export function HomePage(){
    return(
        <>
            <HeaderSection />
            <TitleSection />
            <VideoTest />
            <AboutSection />
            <ProjectSection />
        </>
    );
}