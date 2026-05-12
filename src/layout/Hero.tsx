import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import Button from '../components/Button';
import ContactInfo from '../components/ContactInfo';
import ScrewIcon from '../components/icons/ScrewIcon';
import ModalTrigger from '../components/modal/ModalTrigger';

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const hiRef = useRef<HTMLParagraphElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  const loopTextRef = useRef<HTMLParagraphElement>(null);

  const descriptions = [
    'I build thoughtful web products from early ideas into clean, usable, scalable, and production-ready digital experiences...',
    'Turning product concepts into responsive interfaces and backend-connected flows that feel smooth, practical, and easy to use...',
    'I understand the full journey of building for the web — from planning user flows to connecting APIs, managing data, and shipping the final experience...',
    'Writing clean, reusable, and maintainable code that supports real product growth, scalability, and long-term improvement...',
    'Bringing design, logic, performance, accessibility, and product functionality together to create web applications that work well...',
    'Building fast, responsive, accessible, and API-driven web products across devices, with attention to detail and real user needs...',
  ];

  useEffect(() => {
    const hiElement = hiRef.current;
    const nameElement = nameRef.current;
    const roleElement = roleRef.current;
    const loopTextElement = loopTextRef.current;

    const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

    let index = 0;

    const loopTyping = () => {
      gsap.to(loopTextElement, {
        text: descriptions[index],
        duration: 5,
        ease: 'none',
        onComplete: () => {
          gsap.to(loopTextElement, {
            text: '',
            duration: 3,
            delay: 3,
            onComplete: () => {
              index = (index + 1) % descriptions.length;
              loopTyping();
            },
          });
        },
      });
    };

    tl.to(roleElement, {
      text: '> Software Engineer focused on Web Products',
      duration: 2,
      delay: 0.3,
    }).add(() => {
      loopTyping();
    });

    return () => {
      tl.kill();
      gsap.killTweensOf([roleElement, loopTextElement, hiElement, nameElement]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openPdf = () => {
    window.open(
      '/pdf/Akanaga_Uzoma_Arinze_CV_2026.pdf',
      '_blank',
      'noopener,noreferrer',
    );
  };

  return (
    <section
      id="hello-section"
      className="min-h-screen h-fit pt-[7rem] md:pt-[6rem] lg:pt-0 pb-[4rem] lg:pb-0 flex justify-center lg:items-center text-myWhite overflow-hidden relative"
    >
      <style>
        {`
          @keyframes floatSlow {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-14px) rotate(3deg);
            }
          }

          @keyframes floatReverse {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(12px) rotate(-3deg);
            }
          }

          @keyframes softPulse {
            0%, 100% {
              opacity: 0.65;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.04);
            }
          }
        `}
      </style>

      {/* big web */}
      <div className="pointer-events-none w-full h-full hidden 2xl:block absolute top-0 left-0 opacity-30 z-0">
        <img src="/wavewebbig.svg" alt="wavylines" className="w-full h-full" />
      </div>

      {/* web */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full opacity-20 hidden xl:block 2xl:hidden z-0">
        <img
          src="/waveweb.svg"
          alt="wavylines"
          className="w-full h-full object-cover"
        />
      </div>

      {/* small web */}
      <div className="pointer-events-none w-full h-full hidden lg:block xl:hidden absolute top-[-2.25rem] left-0 opacity-30 z-0">
        <img
          src="/wavewebsmall.svg"
          alt="wavylines"
          className="w-full h-full"
        />
      </div>

      {/* tablet */}
      <div className="pointer-events-none w-full h-full hidden md:block mlg:top-[8.5rem] lg:hidden absolute top-0 left-0 opacity-30 z-0">
        <img src="/wavetablet.svg" alt="wavylines" className="w-full h-full" />
      </div>

      <div className="default-margin w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-[4rem] lg:gap-[3rem] xl:gap-[5rem]">
          {/* LEFT CONTENT */}
          <div className="flex flex-col lg:justify-center lg:items-start items-center h-fit relative z-20">
            <p
              ref={hiRef}
              className="text-center lg:text-left text-lg md:text-xl h-[2rem]"
            >
              __Hi, I am...
            </p>

            <h1
              ref={nameRef}
              className="text-[38px] sm:text-[46px] md:text-[58px] lg:text-[54px] xl:text-[64px] font-[600] leading-[1.05] tracking-[-0.04em] text-center lg:text-left max-w-[850px]"
            >
              AKANAGA UZOMA ARINZE
            </h1>

            <p
              ref={roleRef}
              className="text-myGreen typing-cursor2 text-center lg:text-left text-lg md:text-xl font-[300] mt-5 h-[2rem]"
            ></p>

            <p
              ref={loopTextRef}
              className="typing-cursor h-25 text-center lg:text-left max-w-[700px] text-[17px] md:text-xl leading-8 mt-7 mb-[3rem] min-h-[6rem] md:min-h-[5rem]"
            ></p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-5 relative z-30 w-full sm:w-fit">
              <ModalTrigger modalContent={<ContactInfo />}>
                <Button
                  text="__Lets talk"
                  className="bg-dullGreen text-myBg3 h-[3rem] w-full sm:w-[158px] rounded-[50px] cursor-pointer"
                />
              </ModalTrigger>

              <Button
                text="__Download CV"
                className="border-[2px] border-myWhite text-myWhite h-[3rem] w-full sm:w-fit rounded-[50px] py-[10px] px-[20px] cursor-pointer"
                onClick={openPdf}
              />
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="w-full flex justify-center lg:justify-end relative z-10">
            {/* gradient behind the full visual area */}
            <img
              src="/gradient.svg"
              alt="gradient"
              className="pointer-events-none absolute w-[520px] h-[520px] md:w-[720px] md:h-[720px] right-[-9rem] md:right-[-13rem] lg:right-[-16rem] top-[-8rem] md:top-[-12rem] z-0 opacity-55 scale-[1.25]"
              style={{ filter: 'blur(110px)' }}
            />

            {/* floating developer/product icons */}
            <div className="pointer-events-none absolute top-[1rem] left-[0.5rem] sm:left-[4rem] lg:left-[-1rem] z-30 hidden sm:flex items-center gap-2 rounded-full border border-myGreen/40 bg-myBg3/70 backdrop-blur-md px-4 py-2 text-[13px] text-myGreen shadow-lg">
              <span className="text-myWhite">{`</>`}</span>
              <span>Clean Architecture</span>
            </div>

            <div className="pointer-events-none absolute top-[12rem] md:top-[7rem] right-[0.5rem] md:right-[-0.5rem] z-30 flex items-center gap-2 rounded-full border border-myWhite/20 bg-myBg3/70 backdrop-blur-md px-4 py-2 text-[13px] text-myWhite shadow-lg">
              <span>⚡</span>
              <span>Fast Web Apps</span>
            </div>

            <div className="pointer-events-none absolute bottom-[4rem] left-[0.5rem] md:left-[-1rem] z-30 hidden md:flex items-center gap-2 rounded-full border border-myWhite/20 bg-myBg3/70 backdrop-blur-md px-4 py-2 text-[13px] text-myWhite shadow-lg">
              <span>▣</span>
              <span>Product Systems</span>
            </div>

            <div className="pointer-events-none absolute bottom-[1rem] right-[1rem] md:right-[2rem] z-30 hidden sm:flex items-center gap-2 rounded-full border border-myGreen/40 bg-myBg3/70 backdrop-blur-md px-4 py-2 text-[13px] text-myGreen shadow-lg">
              <span>↗</span>
              <span>Scalable Products</span>
            </div>

            {/* mobile-visible badges */}
            <div className="pointer-events-none absolute top-[1rem] left-[0.5rem] z-30 flex sm:hidden items-center gap-2 rounded-full border border-myGreen/40 bg-myBg3/75 backdrop-blur-md px-3 py-2 text-[11px] text-myGreen shadow-lg">
              <span className="text-myWhite">{`{}`}</span>
              <span>APIs</span>
            </div>

            <div className="pointer-events-none absolute bottom-[5rem] left-[0.5rem] z-30 flex sm:hidden items-center gap-2 rounded-full border border-myWhite/20 bg-myBg3/75 backdrop-blur-md px-3 py-2 text-[11px] text-myWhite shadow-lg">
              <span>🔐</span>
              <span>Auth Flows</span>
            </div>

            <div className="pointer-events-none absolute bottom-[1rem] right-[0.5rem] z-30 flex sm:hidden items-center gap-2 rounded-full border border-myGreen/40 bg-myBg3/75 backdrop-blur-md px-3 py-2 text-[11px] text-myGreen shadow-lg">
              <span>▦</span>
              <span>Data Driven</span>
            </div>

            {/* small decorative code cards */}
            <div
              className="pointer-events-none absolute top-[4.5rem] left-[1rem] md:left-[2rem] z-20 hidden sm:block rounded-[14px] border border-myWhite/10 bg-myBg3/60 backdrop-blur-md px-4 py-3 text-[12px] text-myWhite/80"
              style={{ animation: 'floatSlow 5.5s ease-in-out infinite' }}
            >
              <p className="text-myGreen">const idea = product;</p>
              <p>ship(build(idea));</p>
            </div>

            <div
              className="pointer-events-none absolute bottom-[6rem] lg:right-[-1rem] z-20 hidden md:block rounded-[14px] border border-myWhite/10 bg-myBg3/60 backdrop-blur-md px-4 py-3 text-[12px] text-myWhite/80"
              style={{ animation: 'floatReverse 6s ease-in-out infinite' }}
            >
              <p className="text-myGreen">UX + APIs + Data</p>
              <p>buildWebProduct();</p>
            </div>

            {/* mobile code card */}
            <div
              className="pointer-events-none absolute top-[5rem] right-[0.5rem] z-20 block sm:hidden rounded-[14px] border border-myWhite/10 bg-myBg3/60 backdrop-blur-md px-3 py-2 text-[10px] text-myWhite/80"
              style={{ animation: 'floatSlow 5.5s ease-in-out infinite' }}
            >
              <p className="text-myGreen">product.flow()</p>
              <p>api.connect()</p>
            </div>

            {/* IMAGE CARD */}
            <div className="w-full max-w-[390px] sm:max-w-[430px] md:max-w-[500px] min-h-[470px] sm:min-h-[520px] flex justify-center items-center rounded-[28px] bg-myBg/20 backdrop-blur-lg relative z-10 overflow-visible border-2 border-myWhite/10 shadow-2xl">
              <div className="pointer-events-none absolute inset-4 rounded-[24px] border border-myWhite/4 z-0"></div>

              <div className="pointer-events-none absolute z-20 top-5 left-5">
                <ScrewIcon width="42px" color="#050C17" />
              </div>

              <div className="pointer-events-none absolute z-20 top-5 right-5">
                <ScrewIcon width="42px" color="#050C17" />
              </div>

              <div className="pointer-events-none absolute z-20 bottom-5 left-5">
                <ScrewIcon width="42px" color="#050C17" />
              </div>

              <div className="pointer-events-none absolute z-20 bottom-5 right-5">
                <ScrewIcon width="42px" color="#050C17" />
              </div>

              <div className="opacity-80 bg-myBg3 rounded-[24px] flex justify-center items-center w-[78%] max-w-[354px] h-[390px] sm:h-[420px] overflow-hidden relative z-10 border border-myWhite/10">
                <img
                  src="/portrait.jpeg"
                  alt="Akanaga Uzoma Arinze portrait"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div
                className="pointer-events-none absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[86%] h-[86%] rounded-full border border-myGreen/10 z-0"
                style={{ animation: 'softPulse 4s ease-in-out infinite' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
