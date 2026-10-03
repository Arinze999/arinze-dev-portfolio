const technologies = [
  { title: 'JavaScript', src: '/js.png' },
  { title: 'TypeScript', src: '/ts.png' },
  { title: 'React', src: '/react.png' },
  { title: 'Next.js', src: '/nextwhite.png' },
  { title: 'Tailwind CSS', src: '/tailwind.png' },
  { title: 'ShadCN', src: '/shadcn.png' },
  { title: 'Node.js', src: '/nodejs.png' },
  { title: 'Express.js', src: '/expressjs.png' },
  { title: 'Prisma ORM', src: '/prisma.png' },
  { title: 'Supabase', src: '/supabase.png' },
  { title: 'Firebase', src: '/firebase.png' },
  { title: 'PostgreSQL', src: '/postgresql.png' },
];

const engineeringExpertise = [
  {
    title: 'Application Architecture',
    description:
      'Scalable frontend architecture, reusable component systems, separation of concerns, state management, protected routes, and maintainable application structure.',
  },
  {
    title: 'Backend & Data Integration',
    description:
      'REST APIs, authentication and authorization, RBAC, database-backed workflows, PostgreSQL, Supabase, Prisma, data validation, and reliable frontend-backend communication.',
  },
  {
    title: 'Performance & Product Engineering',
    description:
      'Performance optimization, accessibility, responsive UX, debugging, SEO-aware development, testing, code quality, and translating product requirements into production-ready software.',
  },
];

const Stack = () => {
  return (
    <section className="default-margin flex justify-center items-center py-[4rem] md:py-0 md:pb-[4rem]">
      <div className="w-full max-w-[1225px] bg-lightBlue/5 text-myWhite rounded-[20px] p-[2rem] md:p-[3rem] flex flex-col items-center">
        <div className="text-center max-w-[750px] mb-[3rem]">
          <h3 className="text-[32px] md:text-[40px] font-[600] mb-[1rem]">
            Engineering Stack & Expertise
          </h3>

          <p className="text-[16px] md:text-[18px] opacity-70 leading-[1.7]">
            I work across modern frontend and full-stack technologies, with a
            strong focus on architecture, scalable application design,
            performance, security, accessibility, and building reliable
            production software.
          </p>
        </div>

        {/* Technologies */}
        <div className="w-full mb-[4rem]">
          <h4 className="text-[24px] font-[600] mb-[2rem] text-center">
            Technologies
          </h4>

          <ul className="w-full justify-center gap-[1rem] max-w-[1000px] mx-auto flex flex-wrap items-center">
            {technologies.map((tool, index) => (
              <li
                key={index}
                className="border border-dashed border-myBg rounded-2xl w-[139px] h-[114px] flex flex-col justify-center items-center transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-[50px] h-[50px] flex items-center justify-center">
                  <img
                    src={tool.src}
                    alt={`${tool.title} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <p className="text-[18px] font-[600] mt-[0.4rem]">
                  {tool.title}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Engineering Expertise */}
        <div className="w-full">
          <h4 className="text-[24px] font-[600] mb-[2rem] text-center">
            Engineering Expertise
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.2rem]">
            {engineeringExpertise.map((item, index) => (
              <div
                key={index}
                className="border border-myBg/40 rounded-2xl p-[1.5rem] bg-myBg/10 transition-all duration-300 hover:-translate-y-1"
              >
                <h5 className="text-[19px] font-[600] mb-[0.75rem]">
                  {item.title}
                </h5>

                <p className="text-[14px] md:text-[15px] leading-[1.7] opacity-70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
