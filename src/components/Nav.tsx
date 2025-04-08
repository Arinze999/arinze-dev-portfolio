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

const Nav = () => {
  // Function to scroll to the target section
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Scroll smoothly to the element
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hidden web-nav h-full">
      <ul className="flex text-xl">
        {navItems.map((item, index) => (
          <li key={index} className="border-myBg border-[1px] flex">
            {/* Header with title and chevron */}
            <div className="flex justify-between gap-4 items-center px-10 py-2 cursor-pointer">
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
    </div>
  );
};

export default Nav;
