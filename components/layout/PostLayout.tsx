import { useState } from 'react';
import Date from '../common/Date';
import PageTitle from '../common/PageTitle';
import { ScrollUpIcon, CopyIcon } from '../helper/Icons';
import ScrollingButton from '../helper/ScrollingButton';
import CopyButton from '../helper/CopyButton';
import { getAuthor } from '../lib/authors';
import { getTag } from '../lib/tags';
import SectionLayout from './SectionLayout';

interface PostLayoutProps {
  title: string;
  date: Date;
  slug: string;
  tags: string[];
  author: string;
  description?: string;
  children: React.ReactNode;
}

const PostLayout = ({
  title,
  date,
  slug,
  tags,
  author,
  description,
  children,
}: PostLayoutProps) => {
  // const keywords = tags.map((tag) => getTag(tag).name);
  // const authorName = getAuthor(author);
  const [showScrollButtons, setScrollButtons] = useState(false);
  const [showCopy, setShowCopy] = useState(false);

  return (
    <SectionLayout>
      {/* // can put meta stuff here and SEO */}
      {/* create share button, it should show a modal */}
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <Date date={date} />
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
              <div className="flex items-center space-x-2">
                <dl className="pt-3 pb-5 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
                  <dt className="sr-only">Author</dt>
                  <dd className="text-gray-900 dark:text-gray-100">
                    <span>{getAuthor(author).name}</span>
                  </dd>
                </dl>
              </div>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">{children}</div>
            </div>
          </div>
        </div>
      </article>
      <div
        className={`fixed right-8 bottom-20 hidden ${showScrollButtons ? 'md:flex' : 'md:hidden'}`}
      >
        <div className="flex justify-end">
          <ScrollingButton
            label="Scroll to top"
            svg={<ScrollUpIcon />}
            setShow={setScrollButtons}
            handleClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>
      </div>
      <div className="fixed right-8 bottom-8">
        <div className="flex items-center">
          <CopyButton showText={showCopy} setShowText={setShowCopy} slug={slug} />
        </div>
      </div>
    </SectionLayout>
  );
};

export default PostLayout;
