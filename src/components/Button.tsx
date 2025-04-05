import GitHubIcon from './icons/GithubIcon';
import LinkIcon from './icons/LinkIcon';

const Button = ({
  className,
  text,
  icon,
  git,
  live,
  onClick,
}: {
  className?: string;
  text?: string;
  icon?: boolean;
  git?: boolean;
  live?: boolean;
  onClick?: any;
}) => {
  return (
    <button
      className={`${className} flex justify-center items-center gap-2 text-nowrap cursor-pointer`}
      onClick={onClick}
    >
      {text}
      {icon && (
        <div>
          <img src="/assets/svg/arrowright.svg" alt="" />
        </div>
      )}
      {git && <GitHubIcon width="20px" />}
      {live && <LinkIcon width="20px" />}
    </button>
  );
};

export default Button;
