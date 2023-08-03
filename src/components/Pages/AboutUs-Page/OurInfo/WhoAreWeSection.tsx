import OurInfo from "./OurInfo";
import styles from "./WhoAreWeSection.module.css";

export const WhoAreWeSection = () => {
  return (
    <section className={styles["who-are-we-section"]}>
      <h2>sobre nós</h2>
      <OurInfo />
    </section>
  );
};
