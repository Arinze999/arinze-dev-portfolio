const navItems = [
  {
    title: '__hello',
    sectionId: 'hello-section',
  },
  {
    title: '__about me',
    sectionId: 'about-section',
  },
  {
    title: '__projects',
    sectionId: 'projects-section',
  },
];

const Nav = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <nav className="hidden web-nav h-full relative z-50" aria-label="Main navigation">
      <ul className="flex text-xl">
        {navItems.map((item) => (
          <li key={item.sectionId} className="border-myBg border-[1px] flex">
            <button
              type="button"
              onClick={() => handleScroll(item.sectionId)}
              className="flex justify-between gap-4 items-center px-10 py-2 cursor-pointer text-[16px] hover:text-dullYellow transition-colors duration-300"
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;