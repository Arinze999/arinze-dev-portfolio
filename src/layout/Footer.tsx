const Footer = () => {
  return (
    <div className="py-[3rem] md:py-[5rem] text-myWhite relative">
      <div className="default-margin">
        <h3 className="text-[44px] mb-[2rem]">Lets Work Together</h3>
        <div className="flex flex-col md:flex-row gap-[2rem]">
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
