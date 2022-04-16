import GitHub from "../../public/icons/github.svg";
import LinkedIn from "../../public/icons/linkedin.svg";

interface SocialIconProps {
  kind: "github" | "linkedin";
  href: string;
  size: number;
}

const components = {
  github: GitHub,
  linkedin: LinkedIn,
};

const SocialIcon = ({ kind, href, size = 8 }: SocialIconProps) => {
  if (!href) return null;

  const SocialSvg = components[kind];

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-${size} w-${size}`}
      />
    </a>
  );
};

export default SocialIcon;
