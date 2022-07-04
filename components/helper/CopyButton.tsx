import { Dispatch, SetStateAction } from 'react';
import { CopyIcon } from './Icons';

interface CopyButtonProps {
  showText: boolean;
  setShowText: Dispatch<SetStateAction<boolean>>;
  slug: string | null;
}

export const CopyButton = ({ showText, setShowText, slug }: CopyButtonProps) => {
  return (
    <>
      {showText ? (
        <div className="mr-3 rounded px-2 py-1 bg-black text-gray-100 dark:bg-white dark:text-gray-900">
          Copied URL!
        </div>
      ) : null}
      <button
        className="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
        aria-label="copy button"
        onClick={() => {
          setShowText(true);
          navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_HOSTNAME}/${slug}`);
          setTimeout(() => setShowText(false), 2500);
        }}
      >
        <CopyIcon />
      </button>
    </>
  );
};

export default CopyButton;
