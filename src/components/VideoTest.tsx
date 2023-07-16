import videoRef from "../assets/referenceVideo.mp4";
import "./VideoTest.css";

export function VideoTest() {
  return (
    <video className="VideoTag" autoPlay loop muted>
      <source src={videoRef} type="video/mp4" />
    </video>
  );
}
