import "./ProjectSection.css";

export function ProjectSection() {
  return (
    <section className="projects-section">
      <button className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">veja todos</span>
      </button>
      <h1 className="projects-header">nossos projetos</h1>
    </section>
  );
}
