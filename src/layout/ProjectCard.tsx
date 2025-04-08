import React from 'react';
import Button from '../components/Button';
import ModalTrigger from '../components/modal/ModalTrigger';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  code: string;
  tools: string[];
  date: string;
  src: string;
  view?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  code,
  tools,
  date,
  src,
  view,
}) => {
  const handleLink = () => {
    window.open(link, '_blank');
  };

  const handleCode = () => {
    window.open(code, '_blank');
  };

  return (
    <div className="border-t-[1px] border-myGreen w-full flex items-center justify-center p-5 ml-auto">
      <div className="w-full flex flex-col justify-between max-w-[25rem] h-[40rem] rounded-[15px] p-[1rem] border-myWhite/10 border-[0.5px] bg-gradient-to-r from-[#7CB6FF]/5 to-[#F2F2F2]/5">
        <div className="w-full h-[10rem] flex justify-center items-center rounded-[15px] overflow-hidden">
          <img src={src} alt="project" className="w-full h-auto object-cover" />
        </div>
        <p className="mt-3 text-[18px] font-[500]">
          _{title}
          <span className="text-myGreen text-[14px]"> {date}</span>
        </p>
        {view ? (
          <div className="mt-3 flex gap-[2rem] items-center">
            <ModalTrigger
              modalContent={
                <ul className="text-myWhite pb-[1rem] border-b">
                  <li>
                    <a href="">WhitePace</a> <br />
                    <small>SAAS Landing Page</small>
                    <div className="mt-3 flex gap-[2rem] items-center">
                      <Button
                        text="_View Code"
                        git
                        className="border rounded-3xl text-[14px] py-[5px] px-[10px] hover:text-dullGreen"
                        onClick={handleCode}
                      />
                      <Button
                        text="_Live Demo"
                        live
                        className="border rounded-3xl text-[14px] py-[5px] px-[10px] hover:text-dullGreen"
                        onClick={handleLink}
                      />
                    </div>
                  </li>
                </ul>
              }
            >
              <Button
                text="_View"
                className="border rounded-3xl text-[14px] py-[5px] px-[10px] hover:text-dullGreen"
              />
            </ModalTrigger>
          </div>
        ) : (
          <div className="mt-3 flex gap-[2rem] items-center">
            <Button
              text="_View Code"
              git
              className="border rounded-3xl text-[14px] py-[5px] px-[10px] hover:text-dullGreen"
              onClick={handleCode}
            />
            <Button
              text="_Live Demo"
              live
              className="border rounded-3xl text-[14px] py-[5px] px-[10px] hover:text-dullGreen"
              onClick={handleLink}
            />
          </div>
        )}
        <p className="mt-3 text-[15px]">{description}</p>
        <div className="mt-3 w-fit border p-3 rounded-3xl flex gap-2 items-center">
          <p>Tools Used</p>
          {tools.map((tool, index) => (
            <img src={tool} key={index} alt={tool} className="w-[20px]" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
