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

const Nav = () => {
  return (
    <div className="hidden web-nav h-full">
      <ul className="flex text-xl">
        {navItems.map((item, index) => (
          <li key={index} className="border-myBg border-[1px] flex">
            {/* Header with title and chevron */}
            <div
              className="flex justify-between gap-4 items-center px-10 py-2 cursor-pointer"
              //   onClick={() => handleToggle(index)}
            >
              <span className="text-[16px] hover:text-dullYellow">
                {item.title}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
