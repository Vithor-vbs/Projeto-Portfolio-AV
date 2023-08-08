import styles from "./OurInfo.module.css";
interface InfoData {
  title: string;
  text: string;
}

export default function OurInfo({ title, text }: InfoData) {
  return (
    <section className={title === "2" ? styles["ourInfo-section"] : ""}>
      <div className={styles["info-container"]}>
        <p
          className={`${styles["text-box"]} ${
            title === "2" ? styles["text-aligner"] : ""
          }`}
        >
          <span
            className={`${styles["info-number"]} ${
              title === "2" ? styles["info-number-side"] : ""
            }`}
          >
            {title}.
          </span>
          {text}
        </p>
      </div>
    </section>
  );
}
