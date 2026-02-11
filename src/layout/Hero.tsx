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
    'I focus on creating dynamic, innovative contents and visualization on the web...',
    'Turning ideas into interactive web experiences...',
    'Colaborating with teams, to bring features to life and brainstorm to provide solutions to problems...',
    'Writing clean and reusable code...',
    'Making your website seen, by applying SEO best practices and techniques...',
    'Designing responsive layouts and optimizing website performance accross devices...',
  ];

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

    tl.to(
      roleRef.current,
      { text: '> Front-End Web Developer.', duration: 2 },
      '+=0.3',
    ).add(() => {
      // Start loop after above animations
      loopTyping();
    });

    let index = 0;
    const loopTyping = () => {
      gsap.to(loopTextRef.current, {
        text: descriptions[index],
        duration: 5, // slower typing
        ease: 'none',
        onComplete: () => {
          gsap.to(loopTextRef.current, {
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
    <div
      id="hello-section"
      className="min-h-screen h-fit pt-[7rem] md:pt-[5rem] lg:pt-0 flex justify-center lg:items-center lg:pb-[0] text-myWhite overflow-hidden"
    >
      <div className="default-margin w-full">
        <div className="flex justify-center items-center flex-col lg:flex-row lg:justify-between lg:items-center 2xl:place-items-center gap-[3rem]">
          <div className="flex flex-col lg:justify-center lg:items-start items-center h-fit">
            <p
              ref={hiRef}
              className="text-center lg:text-left text-xl h-[2rem]"
            >
              __Hi, I am...
            </p>
            <h1
              ref={nameRef}
              className="text-[40px] font-[500] text-center lg:text-left md:h-[4rem] h-[10rem]"
            >
              AKANAGA UZOMA ARINZE
            </h1>
            <p
              ref={roleRef}
              className="text-myGreen typing-cursor2 text-center lg:text-left text-xl font-[300] mb-[5rem] md:mb-[3rem] h-[2rem]"
            ></p>
            <p
              ref={loopTextRef}
              className="typing-cursor text-center lg:text-left max-w-[700px] text-xl mb-[5rem] md:mb-[3rem] h-[4rem]"
            ></p>
            <div className="flex gap-5">
              <ModalTrigger modalContent={<ContactInfo />}>
                <Button
                  text="__Lets talk"
                  className="bg-dullGreen text-myBg3 h-[3rem] w-[158px] rounded-[50px]"
                />
              </ModalTrigger>
              <Button
                text="__Download CV"
                className="border-[2px] border-myWhite text-myWhite h-[3rem] w-fit rounded-[50px] py-[10px] px-[20px]"
                onClick={openPdf}
              />
            </div>
          </div>

          {/* IMAGE AND FRAME */}
          <div className="w-full h-[495px] max-w-[500px] md:flex justify-center items-center rounded-[20px] bg-myBg/10 backdrop-blur-lg relative hidden">
            <img
              src="/gradient.svg"
              alt="gradient"
              className="absolute top-0 bottom-0 right-0 z-[-1] transform scale-[1.3]"
              style={{ filter: 'blur(120px)' }}
            />
            <div className="absolute z-[1] top-5 left-5">
              <ScrewIcon width="48px" color="#050C17" />
            </div>
            <div className="absolute z-[1] top-5 right-5">
              <ScrewIcon width="48px" color="#050C17" />
            </div>
            <div className="absolute z-[1] bottom-5 left-5">
              <ScrewIcon width="48px" color="#050C17" />
            </div>
            <div className="absolute z-[1] bottom-5 right-5">
              <ScrewIcon width="48px" color="#050C17" />
            </div>
            <div className="opacity-75 bg-myBg3 rounded-[20px] flex justify-center items-center w-full max-w-[354px] h-[403px] overflow-hidden">
              <img src="/portrait.jpeg" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
