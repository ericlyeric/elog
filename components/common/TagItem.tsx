import Link from 'next/link';
import { paramCase } from 'param-case';

interface TagItemProps {
  text: string;
}

const TagItem = ({ text }: TagItemProps) => {
  return (
    <Link href={`/tags/${paramCase(text)}`}>
      <a className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
        {text.split(' ').join('-')}
      </a>
    </Link>
  );
};

export default TagItem;
