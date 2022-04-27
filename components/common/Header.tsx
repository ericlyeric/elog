import Head from "next/head";
import { default as Link } from "./Link";
import siteMetadata from "../helper/siteMetadata";
import headerNavLinks from "../helper/headerNavLinks";
import ThemeSwitch from "./ThemeSwitch";
import MobileNav from "./MobileNav";
import { BookOpenHeroIcon } from "../helper/Icons";

const Header = () => {
  return (
    <div className="flex flex-col justify-between">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <header className="flex items-center justify-between py-10">
        <Logo />
        <HeaderButtons />
      </header>
    </div>
  );
};

export default Header;

const Logo = () => {
  return (
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
  );
};

const HeaderButtons = () => {
  return (
    <div className="flex items-center text-base leading-5">
      <>
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
        <button type="button" onClick={() => {}}>
          logout
        </button>
      </>
      {/* <button type="button" onClick={() => signIn()}>
          login
        </button> */}
      <ThemeSwitch />
      <MobileNav />
    </div>
  );
};
