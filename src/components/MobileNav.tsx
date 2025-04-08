import React from 'react';
import Button from './Button';
import ModalTrigger from '../components/modal/ModalTrigger';
import ContactInfo from '../components/ContactInfo';

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

const navItems = [
  {
    title: '__hello',
    sectionId: 'hello-section',
    dropdown: ['Overview', 'Pricing', 'Customer stories'],
  },
  {
    title: '__about me',
    sectionId: 'about-section',
    dropdown: ['Collaboration', 'Productivity', 'Task Management'],
  },
  {
    title: '__projects',
    sectionId: 'projects-section',
    dropdown: ['Blog', 'Guides & Tutorials', 'Help center'],
  },
];

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  // Function to scroll to the target section
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Scroll smoothly to the element
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-myBg3 border-b-[1px] border-b-myBg/50 shadow pb-[1rem] z-[-10] transition-transform duration-300 mobile-nav ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <ul className="flex flex-col w-full text-xl mt-[5rem] gap-5">
        {navItems.map((item, index) => (
          <li key={index}>
            <div className="flex justify-between items-center px-4 py-2 cursor-pointer">
              <span
                onClick={() => handleScroll(item.sectionId)}
                className="text-[16px] hover:text-dullYellow"
              >
                {item.title}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div className="px-4 py-2 flex gap-2 md:hidden">
        <ModalTrigger modalContent={<ContactInfo />}>
          <Button
            className="bg-dullGreen text-myBg3 rounded-[10px] py-[10px] px-[20px]"
            text="__contact me"
          />
        </ModalTrigger>
      </div>
    </div>
  );
};

export default MobileNav;
