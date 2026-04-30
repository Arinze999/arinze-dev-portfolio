import { useMemo, useState } from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from './db/ProjectsData';

const Projects = () => {
  const [showOlderProjects, setShowOlderProjects] = useState(false);

  const sortedProjects = useMemo(() => {
    return [...projectsData].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, []);

  const latestProjects = sortedProjects.slice(0, 2);
  const olderProjects = sortedProjects.slice(2);

  const projectsToShow = showOlderProjects
    ? sortedProjects
    : latestProjects;

  return (
    <div
      id="projects-section"
      className="py-[3rem] md:py-[5rem] flex justify-center items-center text-myWhite relative overflow-hidden"
    >
      {/* background */}
      {/* <div className="pointer-events-none w-full h-full absolute top-0 left-0 opacity-10 backdrop-blur-2xl z-0 flex justify-center items-center">
        <img
          src="/projectsBg.png"
          alt="projects background"
          className="pointer-events-none w-full h-full transform scale-[3] md:scale-100 object-cover lg:object-contain max-w-[1000px] max-h-[1000px]"
          style={{ filter: 'blur(180px)' }}
        />
      </div> */}

      <div className="default-margin flex flex-col justify-center items-center w-full relative z-10">
        <h3 className="text-[44px] mb-[2rem]">PROJECTS</h3>

        <div className="w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-2 gap-[2rem] border-[1px] border-myGreen border-b-0 border-x-0 relative z-10">
          {projectsToShow.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} {...project} />
          ))}
        </div>

        {olderProjects.length > 0 && (
          <button
            type="button"
            onClick={() => setShowOlderProjects((prev) => !prev)}
            className="mt-[3rem] border border-myGreen text-myGreen rounded-full px-[2rem] py-[0.9rem] cursor-pointer hover:bg-myGreen hover:text-myBg3 transition-all duration-300 relative z-20"
          >
            {showOlderProjects ? 'Hide Older Projects' : 'View Older Projects'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;