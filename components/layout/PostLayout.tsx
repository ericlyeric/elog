import { useState } from 'react';
import Date from '../common/Date';
import PageTitle from '../common/PageTitle';
import { ScrollUpIcon } from '../helper/Icons';
import ScrollingButton from '../helper/ScrollingButton';
import CopyButton from '../helper/CopyButton';
import { getTag } from '../lib/tags';
import SectionLayout from './SectionLayout';
import TagItem from '../common/TagItem';
import LinkWrapper from '../common/Link';

interface PostLayoutProps {
  title: string;
  date: Date;
  slug: string;
  tags: string[];
  description?: string;
  children: React.ReactNode;
}

const PostLayout = ({ title, date, slug, tags, description, children }: PostLayoutProps) => {
  // const keywords = tags.map((tag) => getTag(tag).name);
  const [showScrollButtons, setScrollButtons] = useState(false);
  const [showCopy, setShowCopy] = useState(false);

  return (
    <SectionLayout>
      {/* // can put meta stuff here and SEO */}
      <article>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <header className="pt-3 xl:pb-3">
            <div className="space-y-1 text-center">
              <div className="text-base font-medium text-center leading-6 text-gray-500 dark:text-gray-400">
                <Date date={date} />
              </div>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              <div>
                {tags && (
                  <div className="flex justify-center py-3 xl:py-1">
                    <div className="flex flex-wrap">
                      {tags.map((tag, index) => (
                        <TagItem key={tag} text={tag} isEnd={index === tags.length - 1} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </header>
          <div className="divide-y divide-gray-200 pb-8 dark:divide-gray-700">
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">{children}</div>
            </div>
            <footer>
              <div className="pt-4 xl:pt-8">
                <LinkWrapper
                  href="/"
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  &larr; Back to the blog
                </LinkWrapper>
              </div>
            </footer>
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
