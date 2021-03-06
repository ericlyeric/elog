import Head from 'next/head';
import LinkWrapper from './Link';
import metadata from '../lib/metadata';
import headerNavLinks from '../helper/headerNavLinks';
import ThemeSwitch from './ThemeSwitch';
import MobileNav from './MobileNav';
import { BookOpenHeroIcon } from '../helper/Icons';
import { useMemo } from 'react';

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

const Logo = () => {
  return (
    <div className="flex items-center">
      <LinkWrapper href="/">
        <div className="flex items-center justify-between">
          <div className="mr-2">
            <BookOpenHeroIcon />
          </div>
          <div className="text-2xl font-semibold sm:block">{metadata.headerTitle}</div>
        </div>
      </LinkWrapper>
    </div>
  );
};

const HeaderButtons = () => {
  const env = useMemo(() => {
    if (process.env.NODE_ENV === 'development') {
      return 'development';
    }
  }, []);

  return (
    <div className="flex items-center text-base leading-5">
      <>
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <LinkWrapper
              key={link.title}
              href={env === 'development' ? '/admin/index.html' : link.href}
              className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
            >
              {link.title}
            </LinkWrapper>
          ))}
        </div>
      </>
      <ThemeSwitch />
      <MobileNav />
    </div>
  );
};

export default Header;
