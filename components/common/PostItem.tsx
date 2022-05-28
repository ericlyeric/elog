import { parseISO } from 'date-fns';
import LinkWrapper from './Link';
import { PostContent } from '../lib/posts';
import Date from './Date';
import TagItem from './TagItem';

interface PostItemProps {
  post: PostContent;
  index: number;
}

export const PostItem = ({ post, index }: PostItemProps) => {
  return (
    <li key={index} className="py-4">
      <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
        <dl>
          <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
            <Date date={parseISO(post.date)} />
          </dd>
        </dl>
        <div className="space-y-3 xl:col-span-3">
          <div>
            <h3 className="text-2xl font-bold leading-8 tracking-tight">
              <LinkWrapper href={`/${post.slug}`} className="text-gray-900 dark:text-gray-100">
                {post.title}
              </LinkWrapper>
            </h3>
            <div className="flex flex-wrap">
              {post.tags?.map((tag) => {
                return <TagItem key={tag} text={tag} />;
              })}
            </div>
          </div>
          <div>
            <div className="prose max-w-none text-gray-500 dark:text-gray-400">{post.summary}</div>
          </div>
        </div>
      </article>
    </li>
  );
};

export default PostItem;
