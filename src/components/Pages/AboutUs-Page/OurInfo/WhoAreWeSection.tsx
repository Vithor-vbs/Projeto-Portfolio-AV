import OurInfo from "./OurInfo";
import styles from "./WhoAreWeSection.module.css";

export const WhoAreWeSection = () => {
  const data = [
    {
      title: "1",
      text: "Somos uma equipe multidiciplinar, focada em transformar ideias em realidade no digital. Nossa experiência em desenvolvimento web e marketing nos permite levar sua marca ao próximo nível.",
    },
    {
      title: "2",
      text: "Trabalhamos lado a lado com nossos clientes, desenvolvemos parcerias de longo prazo para garantir o sucesso contínuo de seus projetos digitais.",
    },
    {
      title: "3",
      text: "Somos uma equipe multidiciplinar, focada em transformar ideias em realidade no digital. Nossa experiência em desenvolvimento web e marketing nos permite levar sua marca ao próximo nível.",
    },
  ];

  return (
    <section className={styles["who-are-we-section"]}>
      <h2>sobre nós</h2>
      <OurInfo text={data[0].text} title={data[0].title} />
      <OurInfo text={data[1].text} title={data[1].title} />
      <OurInfo text={data[2].text} title={data[2].title} />
    </section>
  );
};
