const stack = [
  { title: 'HTML', src: '/html.png' },
  { title: 'CSS', src: '/css.png' },
  { title: 'Javascript', src: '/js.png' },
  { title: 'Typescript', src: '/ts.png' },
  { title: 'Bootstrap', src: '/bootstrap.png' },
  { title: 'Tailwind', src: '/tailwind.png' },
  { title: 'React', src: '/react.png' },
  { title: 'NextJS', src: '/nextwhite.png' },
  { title: 'Firebase', src: '/firebase.png' },
  { title: 'Supabase', src: '/supabase.png' },
  { title: 'MySQL', src: '/sql.png' },
];

const Stack = () => {
  return (
    <div className="default-margin flex justify-center items-center py-[4rem] md:py-0 md:pb-[4rem]">
      <div className="w-full max-w-[1225px] bg-lightBlue/5 text-myWhite opacity-88 h-fited rounded-[20px] p-[2rem] flex flex-col items-center">
        <h3 className="text-[32px] font-[600] mb-[1rem]">My Tech Stack</h3>
        <ul className="w-full h-full justify-center gap-[1rem] max-w-[1000px]  flex flex-wrap items-center ">
          {stack.map((tool, index) => (
            <li
              key={index}
              className="border border-dashed border-myBg rounded-2xl w-[139px] h-[114px] flex flex-col justify-center items-center"
            >
              <div className="w-[50px] h-[50px]">
                <img src={tool.src} alt="" />
              </div>
              <p className="text-[18px] font-[600]">{tool.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Stack;
