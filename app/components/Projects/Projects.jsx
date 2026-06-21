import { projects } from "@/app/utlis/data";
import Project from "./Project";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container mx-auto px-5 py-20">
        <h2 className="text-4xl font-medium border-l-8 px-3 mb-10 border-primary text-white">
          Projects
        </h2>

        <div className="flex flex-wrap justify-between gap-y-8">
          {projects.map((project, index) => (
            <Project key={index} project={project} featured={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
