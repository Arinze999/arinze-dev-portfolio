import Button from '../components/Button';
import ScrewIcon from '../components/icons/ScrewIcon';

const Hero = () => {
  return (
    <div className="min-h-screen h-fit pt-[5rem] md:pt-0 flex justify-center items-center lg:pb-[0] text-myWhite">
      <div className="default-margin">
        {/* big web */}
        <div className="w-full h-full hidden 2xl:block absolute top-0 left-0 opacity-30">
          <img
            src="/assets/svg/wavewebbig.svg"
            alt="wavylines"
            className="w-full h-full"
          />
        </div>
        {/* web */}
        <div className="w-full h-full hidden xl:block 2xl:hidden absolute top-0 left-0 opacity-30">
          <img
            src="/assets/svg/waveweb.svg"
            alt="wavylines"
            className="w-full h-full"
          />
        </div>
        {/* small web */}
        <div className="w-full h-full hidden lg:block xl:hidden absolute top-[-2.25rem] left-0 opacity-30">
          <img
            src="/assets/svg/wavewebsmall.svg"
            alt="wavylines"
            className="w-full h-full"
          />
        </div>
        {/* tablet */}
        <div className="w-full h-full hidden md:block mlg:top-[8.5rem] lg:hidden absolute top-0 left-0 opacity-30">
          <img
            src="/assets/svg/wavetablet.svg"
            alt="wavylines"
            className="w-full h-full"
          />
        </div>
        {/* mobile */}
        <div className="w-full auto md:hidden block absolute top-0 left-0 opacity-30">
          <img
            src="/assets/svg/wavemobile.svg"
            alt="wavylines"
            className="w-full h-full"
          />
        </div>
        <div className="flex justify-center items-center flex-col lg:flex-row lg:justify-between lg:items-center 2xl:place-items-center gap-[3rem]">
          <div className="flex flex-col justify-center lg:items-start items-center h-fit">
            <p className="text-center lg:text-left text-xl">
              __Hi, I am...
            </p>
            <h1 className="text-[40px] font-[500] text-center lg:text-left">
              AKANAGA UZOMA ARINZE
            </h1>
            <p className="text-myGreen text-center lg:text-left text-xl font-[300] mb-[5rem] md:mb-[3rem]">
              {`> Front-End Web Developer.`}
            </p>
            <p className="text-center lg:text-left max-w-[700px] text-xl mb-[5rem] md:mb-[3rem]">
              {`<>I focus on creating dynamic and innovative contents and
              visualization on the web</>`}
            </p>
            <div className="flex gap-5">
              <Button
                text="__Lets talk"
                className="bg-dullGreen text-myBg3 h-[3rem] w-[158px] rounded-[50px]"
                icon
              />
              <Button
                text="__Download CV"
                className="border-[2px] border-myWhite text-myWhite h-[3rem] w-fit rounded-[50px]"
                icon
              />
            </div>
          </div>
          <div className="w-full h-[495px] max-w-[500px] flex justify-center items-center rounded-[20px] bg-myBg/10 backdrop-blur-lg relative overflow-hidden">
            <img
              src="/gradient.svg"
              alt="gradient"
              className="absolute top-0 bottom-0 right-0 z-[-1]"
            />
            <div className="absolute z-[1] top-5 left-5">
              <ScrewIcon width="48px" color="#050C17"/>
            </div>
            <div className="absolute z-[1] top-5 right-5">
              <ScrewIcon width="48px" color="#050C17"/>
            </div>
            <div className="absolute z-[1] bottom-5 left-5">
              <ScrewIcon width="48px" color="#050C17"/>
            </div>
            <div className="absolute z-[1] bottom-5 right-5">
              <ScrewIcon width="48px" color="#050C17"/>
            </div>
            <div className="opacity-95 bg-myBg3 rounded-[20px] flex justify-center items-center w-[354px] h-[403px] overflow-hidden">
              <img src="/portrait2.png" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
