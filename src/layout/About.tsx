import Button from '../components/Button';

const About = () => {
  return (
    <div className="py-[3rem] flex justify-center items-center bg-dullBlue text-myWhite relative">
      {/* big web */}
        <div className="w-full h-full hidden 2xl:block absolute top-0 left-0 opacity-30">
          <img
            src="/wavewebbig.svg"
            alt="wavylines"
            className="w-full h-full"
          />
        </div>
           {/* web */}
      <div className="absolute top-0 left-0 h-full w-full opacity-20 hidden xl:block 2xl:hidden">
        <img
          src="/waveweb.svg"
          alt="aver"
          className="w-full h-full object-cover"
        />
           {/* small web */}
        <div className="w-full h-full hidden lg:block xl:hidden absolute top-[-2.25rem] left-0 opacity-30">
          <img
            src="/wavewebsmall.svg"
            alt="wavylines"
            className="w-full h-full"
          />
        </div>
         {/* tablet */}
        <div className="w-full h-full hidden md:block mlg:top-[8.5rem] lg:hidden absolute top-0 left-0 opacity-30">
          <img
            src="/wavetablet.svg"
            alt="wavylines"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="default-margin">
        <div className="flex justify-center items-center flex-col lg:flex-row lg:justify-between lg:items-start gap-[3rem]">
          <div className="flex-1 relative">
            <div className="w-[373px] h-[373px] flex justify-center items-start rounded-full overflow-hidden opacity-75">
              <img src="/portrait.jpeg" alt="portrait" className='translate-y-[-62px]'/>
            </div>
            <p className="absolute top-0 right-0 text-[54px] font-[600] hidden lg:block">
              ABOUT <br /> ME
            </p>
          </div>
          <div className="flex-1">
            <h1 className="text-[18px] font-[500] text-center lg:text-left mb-[1rem]">
              {`<>From Surveying to Front-End Development<> `}
            </h1>
            <p className="text-center lg:text-left max-w-[700px] text-xl mb-[5rem] md:mb-[3rem]">
              {`<p>...My journey began with a simple curiosity—how do websites work? That curiosity turned into a passion, leading me to self-teach web development and master HTML, CSS, JavaScript, React, and Tailwind. `}{' '}
              <br />
              {`Now, I bring creativity, logic, and user-first design to every project, building seamless digital experiences. Always learning, always creating—let’s build something great together! </p>`}{' '}
            </p>
            <div className="flex justify-between mb-[3rem]">
              <p className="text-myGreen">
                4+ <br />
                Client Projects <br /> Completed
              </p>
              <p className="text-myGreen">
                3+ <br />
                Years of <br /> Experience
              </p>
            </div>
            <div className='flex justify-center lg:block'>
              <Button
                text="__Hire Me"
                className="w-[154px] h-[52px] border rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
