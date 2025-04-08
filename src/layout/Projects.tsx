import ProjectCard from './ProjectCard';
import { projectsData } from './db/ProjectsData';

const Projects = () => {
  const leftProjects = projectsData.filter((_, index) => index % 2 === 0);
  const rightProjects = projectsData.filter((_, index) => index % 2 !== 0);

  return (
    <div
      id="projects-section"
      className="py-[3rem] md:py-[5rem] flex justify-center items-center text-myWhite relative"
    >
      <div className="w-full h-full absolute abs top-0 left-0 opacity-30 z-[-1] flex justify-center items-center">
        <img
          src="/projectsBg.png"
          alt="wavylines"
          className="w-full h-full transform scale-[3] md:scale-100 object-cover lg:object-contain max-w-[1000px] max-h-[1000px]"
          style={{ filter: 'blur(180px)' }}
        />
      </div>
      <div className="default-margin flex flex-col justify-center items-center w-full">
        <h3 className="text-[44px] mb-[2rem]">PROJECTS</h3>
        <div className="grid md:grid-cols-2 w-full">
          {/* Left column */}
          <div className="flex flex-col md:w-[90%] border-[1px] border-myGreen border-l-0 border-b-0 mx-auto md:mx-0 md:ml-auto">
            {leftProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          {/* Right column with a step down effect */}
          <div className="flex flex-col md:mt-[6rem] md:w-[90%] border-[1px] border-myGreen border-r-0 border-b-0 mx-auto md:mx-0 mr-auto">
            {rightProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
