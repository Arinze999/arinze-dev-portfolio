import DirectMessage from '../components/DirectMessage';

const Footer = () => {
  return (
    <div className="py-[3rem] md:py-[5rem] text-myWhite relative">
      <div className="default-margin">
        <h3 className="text-[44px] mb-[3rem] relative">
          Lets Work Together
          <span className="absolute h-[3px] w-full bg-myWhite bottom-0 left-0"></span>
        </h3>
        <div className="flex flex-col md:flex-row justify-between gap-[2rem]">
          <div className="border w-[16rem] h-[147px] rounded-[10px] flex flex-col justify-around items-center">
            <div className="w-[50px] h-[50px]">
              <img
                src="/cvholder.png"
                alt="cv"
                className="w-full h-full object-cover"
              />
            </div>
            <p>Download CV</p>
          </div>

          <div className="border w-[16rem] h-[147px] rounded-[10px] flex flex-col justify-around items-center">
            <div className="w-[50px] h-[50px]">
              <img
                src="/mailholdder.png"
                alt="cv"
                className="w-full h-full object-cover"
              />
            </div>
            <p>akanagapyt@gmail.com</p>
          </div>

          <div className="border w-[16rem] h-[147px] rounded-[10px] flex flex-col justify-around items-center">
            <div className="w-[50px] h-[50px]">
              <img
                src="/linkedinholder.png"
                alt="cv"
                className="w-full h-full object-cover"
              />
            </div>
            <p>LinkedIn</p>
          </div>

          <div className="w-fit h-[147px] flex flex-col gap-[1rem] md:justify-between">
            <div className="w-full flex justify-between gap-[1rem]">
              <a href="" target="_blank">
                <img src="/twitter2.png" alt="twitter" />
              </a>
              <a href="" target="_blank">
                <img src="/insta.png" alt="twitter" />
              </a>
              <a href="" target="_blank">
                <img src="/threads.png" alt="twitter" />
              </a>
            </div>
            <p>Socials</p>
          </div>
          <div className="flex-1 h-[147px] rounded-[10px] flex flex-col justify-around items-center">
            <DirectMessage phoneNumber="+2348135796025" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
