import DirectMessage from '../components/DirectMessage';

const Footer = () => {
  const openPdf = () => {
    // Replace 'document.pdf' with your PDF file name.
    window.open(
      '/pdf/ArinzeDeveloperCV-Frontend.pdf',
      '_blank',
      'noopener,noreferrer'
    );
  };

  const openMail = () => {
    // Replace 'document.pdf' with your PDF file name.
    window.open('mailto:akanagapyt@gmail.com', '_blank', 'noopener,noreferrer');
  };

  const openLinkedIn = () => {
    // Replace 'document.pdf' with your PDF file name.
    window.open(
      ' https://www.linkedin.com/in/uzoma-akanaga-87542017a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="py-[3rem] md:py-[5rem] text-myWhite relative">
      <div className="default-margin">
        <h3 className="text-[44px] mb-[3rem] relative">
          Lets Work Together
          <span className="absolute h-[3px] w-full bg-myWhite bottom-0 left-0"></span>
        </h3>
        <div className="flex flex-col lg:flex-row justify-between gap-[2rem]">
          <div
            onClick={openPdf}
            className="border w-[13rem] h-[147px] rounded-[10px] flex flex-col justify-around items-center cursor-pointer"
          >
            <div className="w-[50px] h-[50px]">
              <img
                src="/cvholder.png"
                alt="cv"
                className="w-full h-full object-cover"
              />
            </div>
            <p>Download CV</p>
          </div>

          <div
            onClick={openMail}
            className="border w-[13rem] h-[147px] rounded-[10px] flex flex-col justify-around items-center cursor-pointer"
          >
            <div className="w-[50px] h-[50px]">
              <img
                src="/mailholdder.png"
                alt="cv"
                className="w-full h-full object-cover"
              />
            </div>
            <p>akanagapyt@gmail.com</p>
          </div>

          <div
            onClick={openLinkedIn}
            className="border w-[13rem] h-[147px] rounded-[10px] flex flex-col justify-around items-center cursor-pointer"
          >
            <div className="w-[50px] h-[50px]">
              <img
                src="/linkedinholder.png"
                alt="cv"
                className="w-full h-full object-cover"
              />
            </div>
            <p>LinkedIn</p>
          </div>

          <div className="w-fit md:h-[147px] flex flex-col gap-[1rem] md:justify-between">
            <p>Socials</p>
            <div className="w-full flex justify-between gap-[1rem]">
              <a
                href="https://twitter.com/aRinze_999?t=RrfGKbLs61ZySHR0QJOGjw&s=09"
                target="_blank"
              >
                <img src="/twitter2.png" alt="twitter" />
              </a>
              <a
                href="https://instagram.com/a_r_in_z_e?utm_source=qr&igshid=ZGUzMzM3NWJiOQ%3D%3D"
                target="_blank"
              >
                <img src="/insta.png" alt="insta" />
              </a>
              <a
                href="https://www.threads.net/@arinzedev_999?invite=0"
                target="_blank"
              >
                <img src="/threads.png" alt="insta" />
              </a>
            </div>
          </div>
          <div className="flex-1 rounded-[10px] flex flex-col justify-around items-center">
            <DirectMessage phoneNumber="+2348135796025" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
