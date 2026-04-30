import ModalTrigger from '../components/modal/ModalTrigger';

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  code?: string;
  tools: string[];
  date: string;
  src: string;
  view?: string;
  links?: string[];
  codes?: string[];
}

type ProjectOption = {
  title: string;
  subtitle: string;
  liveLink?: string;
  codeLink?: string;
};

const ProjectCard = ({
  title,
  description,
  link,
  code,
  tools,
  date,
  src,
  view,
  links,
  codes,
}: ProjectCardProps) => {
  const imageSrc = src.startsWith('/') ? src : `/${src}`;

  const getToolSrc = (tool: string) => {
    return tool.startsWith('/') ? tool : `/${tool}`;
  };

  const projectOptions: ProjectOption[] =
    view === 'land'
      ? [
          {
            title: 'HOPE',
            subtitle: 'NGO landing page',
            liveLink: links?.[0],
            codeLink: codes?.[0],
          },
          {
            title: 'WhitePace',
            subtitle: 'SaaS landing page',
            liveLink: links?.[1],
            codeLink: codes?.[1],
          },
        ]
      : view === 'contentfix'
        ? [
            {
              title: 'ContentFix Landing',
              subtitle:
                'Explore the quick-try feature and see how content can be enhanced instantly.',
              liveLink: links?.[0],
              codeLink: codes?.[0],
            },
            {
              title: 'ContentFix Dashboard',
              subtitle:
                'Explore saved brand voice, content personality, extra context, and customizable output tools.',
              liveLink: links?.[1],
              codeLink: codes?.[1],
            },
          ]
        : [];

  const hasMultipleProjectLinks = projectOptions.length > 0;

  return (
    <article className="border-t border-myGreen/1 w-full py-6">
      <div className="w-full rounded-[18px] border-2 border-myWhite/10 bg-gradient-to-r from-[#7CB6FF]/5 to-[#F2F2F2]/5 p-4 md:p-5 lg:p-6 transition-all duration-300 hover:border-myGreen/20 hover:bg-myWhite/[0.04]">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.25fr] gap-6 lg:gap-8 items-stretch">
          {/* Image */}
          <div className="w-full min-h-[210px] sm:min-h-[260px] lg:min-h-full rounded-[16px] overflow-hidden bg-myBg3/40 border border-myWhite/10">
            <img
              src={imageSrc}
              alt={`${title} project preview`}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between gap-5">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <h4 className="text-[22px] md:text-[26px] font-[600] leading-tight">
                  _{title}
                </h4>

                <span className="text-myGreen text-[14px] md:text-[15px] whitespace-nowrap">
                  {date}
                </span>
              </div>

              <p className="text-[15px] md:text-[16px] leading-7 text-myWhite/85">
                {description}
              </p>
            </div>

            {/* Tools */}
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-[14px] text-myWhite/80">Tools Used</p>

              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <div
                    key={`${tool}-${index}`}
                    className="w-[34px] h-[34px] rounded-full border border-myWhite/10 bg-myWhite/5 flex justify-center items-center"
                  >
                    <img
                      src={getToolSrc(tool)}
                      alt="tool"
                      className="w-[19px] h-[19px] object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3 pt-1">
              {hasMultipleProjectLinks ? (
                <ModalTrigger
                  modalContent={
                    <div className="text-myWhite pb-2 w-full max-w-[520px]">
                      <h4 className="text-[22px] font-[600] mb-4">
                        View {title}
                      </h4>

                      <div className="flex flex-col gap-4">
                        {projectOptions.map((option) => (
                          <div
                            key={option.title}
                            className="border border-myWhite/10 rounded-[14px] p-4 bg-myWhite/[0.03]"
                          >
                            <p className="text-[18px] font-[500]">
                              {option.title}
                            </p>

                            <small className="block mt-2 text-myWhite/75 leading-6">
                              {option.subtitle}
                            </small>

                            <div className="mt-4 flex flex-wrap gap-3">
                              {option.codeLink && (
                                <a
                                  href={option.codeLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="border rounded-3xl text-[14px] py-[7px] px-[12px] hover:text-dullGreen transition-colors"
                                >
                                  _View Code
                                </a>
                              )}

                              {option.liveLink && (
                                <a
                                  href={option.liveLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="border rounded-3xl text-[14px] py-[7px] px-[12px] hover:text-dullGreen transition-colors"
                                >
                                  _Live Demo
                                </a>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  }
                >
                  <button
                    type="button"
                    className="border rounded-3xl text-[14px] py-[8px] px-[16px] hover:text-dullGreen transition-colors cursor-pointer"
                  >
                    _View Project
                  </button>
                </ModalTrigger>
              ) : (
                <>
                  {code && (
                    <a
                      href={code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border rounded-3xl text-[14px] py-[8px] px-[16px] hover:text-dullGreen transition-colors"
                    >
                      _View Code
                    </a>
                  )}

                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border rounded-3xl text-[14px] py-[8px] px-[16px] hover:text-dullGreen transition-colors"
                    >
                      _Live Demo
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
