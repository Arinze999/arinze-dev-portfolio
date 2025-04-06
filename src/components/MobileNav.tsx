import React from 'react';
import Button from './Button';
import ModalTrigger from '../components/modal/ModalTrigger';
import ContactInfo from '../components/ContactInfo';

type MobileNavProps = {
  isOpen: boolean;
};

const navItems = [
  { title: '__hello', dropdown: ['Overview', 'Pricing', 'Customer stories'] },
  {
    title: '__about me',
    dropdown: ['Colaboration', 'Productivity', 'Task Managemnt'],
  },
  {
    title: '__projects',
    dropdown: ['Blog', 'Guides & Tutorials', 'Help center'],
  },
];

const MobileNav: React.FC<MobileNavProps> = ({ isOpen }) => {
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
              <span className="text-[16px] hover:text-dullYellow">
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
