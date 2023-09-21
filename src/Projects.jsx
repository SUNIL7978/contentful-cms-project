import { FetchProjectData } from './FetchData';

const Projects = () => {
  const { loading, projects } = FetchProjectData();

  if (loading) {
    return (
      <section className="projects">
        <h3>Loading...</h3>
      </section>
    );
  }
  return (
    <section className="projects">
      <div className="title">
        <h3>Projects</h3>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { id, img, title, url } = project;
          return (
            <a
              key={id}
              href={url}
              className="project"
              rel="noreferrer"
              target="_blank"
            >
              <img src={img} alt={title} className="img" />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
