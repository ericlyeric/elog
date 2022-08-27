import Link from 'next/link';
import { useSearchContext } from '../context/SearchContext';

interface TagItemProps {
  text: string;
  isEnd?: boolean;
}

const TagItem = ({ text, isEnd = false }: TagItemProps) => {
  const { setSearchValue } = useSearchContext();

  return (
    <Link href={`/`}>
      <a
        className={`${
          isEnd ? '' : 'mr-3'
        } text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400`}
        onClick={() => setSearchValue(text)}
      >
        {text}
      </a>
    </Link>
  );
};

export default TagItem;
