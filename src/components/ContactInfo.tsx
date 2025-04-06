import LinkIcon from './icons/LinkIcon';

const ContactInfo = () => {
  return (
    <div className='text-myWhite'>
      <h3 className="mb-[2rem]">Contact Info</h3>
      <ul className="flex flex-col gap-5">
        <li>
          <a
            href="https://wa.me/2348135796025"
            target="_blank"
            className="flex items-center gap-3 underline w-fit"
          >
            <img src="/whatsapp.png" alt="whatsapp" />
            Whatsapp
            <LinkIcon />
          </a>
        </li>
        <li>
          <a
            href="mailto:akanagapyt@gmail.com"
            target="_blank"
            className="flex items-center gap-3 underline w-fit"
          >
            <img src="/gmail.png" alt="mail" />
            Mail
            <LinkIcon />
          </a>
        </li>
        <li>
          <a
            href="tel:+2348135796025"
            target="_blank"
            className="flex items-center gap-3 w-fit"
          >
            <img src="/call.png" alt="phone" />
            Phone: +2348135796025
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
