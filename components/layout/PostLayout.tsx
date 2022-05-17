import { getAuthor } from '../lib/authors';
import { getTag } from '../lib/tags';

interface PostLayoutProps {
  title: string;
  date: Date;
  slug: string;
  tags: string[];
  author: string;
  description?: string;
  children: React.ReactNode;
}

export const PostLayout = ({
  title,
  date,
  slug,
  tags,
  author,
  description,
  children,
}: PostLayoutProps) => {
  const keywords = tags.map((tag) => getTag(tag).name);
  const authorName = getAuthor(author).name;
  
  return (
    <h1>Post Layout Page</h1>
  )
};
