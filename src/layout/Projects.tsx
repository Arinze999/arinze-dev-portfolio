import { useMemo, useState } from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from './db/ProjectsData';

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const sortedProjects = useMemo(() => {
    return [...projectsData].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, []);

  const featuredProjects = sortedProjects.slice(0, 2);
  const remainingProjects = sortedProjects.slice(2);

  const projectsToShow = showAllProjects ? sortedProjects : featuredProjects;

  return (
    <section
      id="projects-section"
      className="py-[3rem] md:py-[5rem] flex justify-center items-center text-myWhite relative overflow-hidden"
    >
      <div className="pointer-events-none absolute top-[10%] left-[-6rem] h-[18rem] w-[18rem] rounded-full bg-myGreen/10 blur-[90px]" />
      <div className="pointer-events-none absolute bottom-[10%] right-[-6rem] h-[18rem] w-[18rem] rounded-full bg-myGreen/10 blur-[90px]" />

      <div className="default-margin flex flex-col justify-center items-center w-full relative z-10">
        <p className="text-myGreen text-[13px] tracking-[0.25em] uppercase mb-3">
          Selected Work
        </p>

        <h3 className="text-[34px] md:text-[44px] mb-4 text-center">
          Web Products I Have Built
        </h3>

        <p className="max-w-[720px] text-center text-myWhite/70 text-[15px] md:text-[16px] leading-[1.8] mb-[2.5rem]">
          A few projects that show my experience building responsive interfaces,
          backend-connected flows, authentication, dashboards, payments,
          database-driven features, and product-focused web applications.
        </p>

        <div className="w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-2 gap-[2rem] border-[1px] border-myGreen/70 border-b-0 border-x-0 pt-[2rem] relative z-10">
          {projectsToShow.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} {...project} />
          ))}
        </div>

        {remainingProjects.length > 0 && (
          <button
            type="button"
            onClick={() => setShowAllProjects((prev) => !prev)}
            className="mt-[3rem] border border-myGreen text-myGreen rounded-full px-[2rem] py-[0.9rem] cursor-pointer hover:bg-myGreen hover:text-myBg3 transition-all duration-300 relative z-20"
          >
            {showAllProjects ? 'Show Featured Projects' : 'View More Projects'}
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;