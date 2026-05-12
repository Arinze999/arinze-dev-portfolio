import Button from '../components/Button';

const productAreas = [
  {
    title: 'Web Products',
    text: 'I build dashboards, landing pages, portals, and product flows that are usable, responsive, and ready for real users.',
    icon: '▣',
  },
  {
    title: 'Backend-Connected Features',
    text: 'I work with APIs, authentication, databases, protected routes, and user flows that connect the interface to real product logic.',
    icon: '{}',
  },
  {
    title: 'SEO & Performance',
    text: 'I pay attention to speed, accessibility, clean structure, metadata, and SEO-aware development so products can perform better online.',
    icon: '↗',
  },
];

const experienceAreas = [
  'Health & hospital support platforms',
  'Locum job placement products',
  'SaaS dashboards for community management',
  'Discord gamification systems',
  'E-commerce web apps for brands',
  'AI-powered content tools',
];

const About = () => {
  const openGit = () => {
    window.open(
      'https://github.com/Arinze999',
      '_blank',
      'noopener,noreferrer',
    );
  };

  return (
    <section
      id="about-section"
      className="py-[3rem] md:py-[5rem] flex justify-center items-center bg-dullBlue text-myWhite relative overflow-hidden"
    >
      {/* big web */}
      <div className="pointer-events-none w-full h-full hidden 2xl:block absolute top-0 left-0 opacity-10 z-0">
        <img src="/wavewebbig.svg" alt="wavylines" className="w-full h-full" />
      </div>

      {/* web */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full opacity-10 hidden xl:block 2xl:hidden z-0">
        <img
          src="/waveweb.svg"
          alt="wavylines"
          className="w-full h-full object-cover"
        />
      </div>

      {/* small web */}
      <div className="pointer-events-none w-full h-full hidden lg:block xl:hidden absolute top-[-2.25rem] left-0 opacity-10 z-0">
        <img
          src="/wavewebsmall.svg"
          alt="wavylines"
          className="w-full h-full"
        />
      </div>

      {/* tablet */}
      <div className="pointer-events-none w-full h-full hidden md:block mlg:top-[8.5rem] lg:hidden absolute top-0 left-0 opacity-10 z-0">
        <img src="/wavetablet.svg" alt="wavylines" className="w-full h-full" />
      </div>

      {/* glow */}
      <div className="pointer-events-none absolute top-[12%] right-[-6rem] h-[18rem] w-[18rem] rounded-full bg-myGreen/10 blur-[80px]" />
      <div className="pointer-events-none absolute bottom-[10%] left-[-6rem] h-[16rem] w-[16rem] rounded-full bg-myGreen/10 blur-[90px]" />

      <div className="default-margin relative z-10">
        <div className="grid gap-[3rem] lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* image side */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-[290px] h-[340px] sm:w-[360px] sm:h-[420px] rounded-[28px] overflow-hidden border border-myWhite/10 bg-myBg3/50 shadow-2xl">
                <img
                  src="/about-software-engineer.jpg"
                  alt="Software engineer working on web products"
                  className="w-full h-full object-cover opacity-40"
                />
              </div>

              <div className="absolute top-4 right-[-1rem] hidden sm:flex items-center gap-2 rounded-full border border-myGreen/40 bg-myBg3/80 backdrop-blur-md px-4 py-2 text-[12px] text-myGreen shadow-lg">
                <span>{`</>`}</span>
                <span>Software Engineer</span>
              </div>

              <div className="absolute bottom-5 left-[-1rem] hidden sm:flex items-center gap-2 rounded-full border border-myWhite/20 bg-myBg3/80 backdrop-blur-md px-4 py-2 text-[12px] text-myWhite shadow-lg">
                <span>⚙️</span>
                <span>Web Products</span>
              </div>

              <div className="absolute bottom-[-1.25rem] right-[1rem] rounded-[18px] border border-myWhite/10 bg-myBg3/80 backdrop-blur-md px-4 py-3 text-[12px] text-myWhite/80 shadow-xl">
                <p className="text-myGreen">product.idea()</p>
                <p>build + ship + improve</p>
              </div>
            </div>

            <p className="absolute top-0 right-0 text-[54px] font-[600] hidden lg:block text-myWhite/10 leading-none">
              ABOUT <br /> ME
            </p>
          </div>

          {/* content side */}
          <div className="relative z-20">
            <p className="text-myGreen text-[13px] tracking-[0.25em] uppercase text-center lg:text-left mb-3">
              About Me
            </p>

            <h1 className="text-[26px] md:text-[36px] font-[700] text-center lg:text-left leading-tight mb-[1rem]">
              Software Engineer focused on building useful web products.
            </h1>

            <p className="text-center mx-auto lg:text-left text-[15px] md:text-[16px] max-w-[760px] text-myWhite/75 leading-[1.8] mb-[1.5rem]">
              I build web products that connect clean interfaces with real
              product logic. My work sits between design, frontend engineering,
              APIs, databases, authentication, performance, accessibility, and
              the small details that make a product feel reliable.
            </p>

            <p className="text-center mx-auto lg:text-left text-[15px] md:text-[16px] max-w-[760px] text-myWhite/75 leading-[1.8] mb-[2rem]">
              Across freelance, contract, internship, and personal product work,
              I have worked on healthcare and hospital-related platforms, locum
              job placement systems, SaaS dashboards, Discord community
              management tools with gamification, e-commerce apps, and
              AI-powered content tools.
            </p>

            {/* cards */}
            <div className="grid gap-4 md:grid-cols-3 mb-[2rem]">
              {productAreas.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-[20px] border-2 border-myWhite/10 bg-myBg3/50 backdrop-blur-md p-4 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-myGreen/40"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full border-2 border-myGreen/40 text-myGreen">
                    {item.icon}
                  </div>

                  <h2 className="text-[15px] font-[600] mb-2 text-myWhite">
                    {item.title}
                  </h2>

                  <p className="text-[13px] leading-[1.7] text-myWhite/65">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* experience tags */}
            <div className="mb-[2rem]">
              <h2 className="text-center lg:text-left text-[15px] font-[600] mb-4 text-myWhite">
                Product areas I have worked around
              </h2>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {experienceAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border-2 border-myWhite/10 bg-myBg3/60 px-4 py-2 text-[12px] text-myWhite/75 transition duration-300 hover:border-myGreen/40 hover:text-myGreen"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* stats */}
            <div className="grid grid-cols-2 gap-4 mb-[2rem] max-w-[500px] mx-auto lg:mx-0">
              <div className="rounded-[20px] border-2 border-myWhite/10 bg-myBg3/40 p-4 text-center lg:text-left">
                <p className="text-[28px] font-[700] text-myGreen">4+</p>
                <p className="text-[13px] text-myWhite/70">
                  Product-based projects completed
                </p>
              </div>

              <div className="rounded-[20px] border-2 border-myWhite/10 bg-myBg3/40 p-4 text-center lg:text-left">
                <p className="text-[28px] font-[700] text-myGreen">3+</p>
                <p className="text-[13px] text-myWhite/70">
                  Years building for the web
                </p>
              </div>
            </div>

            <p className="text-center mx-auto lg:text-left text-[14px] md:text-[15px] max-w-[760px] text-myWhite/70 leading-[1.8] mb-[2rem]">
              My mindset is simple: understand the product goal, translate the
              idea into clean technical decisions, build with attention to
              detail, and keep improving until the experience is useful,
              scalable, and easy to maintain.
            </p>

            <div className="flex justify-center lg:justify-start relative z-30">
              <Button
                text="__Git Hub"
                className="w-[154px] h-[52px] border rounded-3xl cursor-pointer relative z-30"
                git
                onClick={openGit}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
