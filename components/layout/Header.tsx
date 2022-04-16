import { default as Link } from "../common/Link";
import siteMetadata from "../helper/siteMetadata";
import headerNavLinks from "../helper/headerNavLinks";
import ThemeSwitch from "../common/ThemeSwitch";
import MobileNav from "../common/MobileNav";

const Header = () => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <header className="flex items-center justify-between py-10">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center justify-between">
              <div className="mr-2">
                <BookOpenHeroIcon />
              </div>
              <div className="text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center text-base leading-5">
          <div className="hidden sm:block">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <ThemeSwitch />
          <MobileNav />
        </div>
      </header>
    </div>
  );
};

export default Header;

const BookOpenHeroIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  );
};
