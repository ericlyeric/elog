import { useEffect, useState, Dispatch, SetStateAction } from 'react';

interface ShareButtonProps {
  setShow: Dispatch<SetStateAction<boolean>>;
}

const ShareButton = ({ setShow }: ShareButtonProps) => {
  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  });

  const handleClickShare = () => {
    window.alert('copied url');
  };

  return (
    <button
      aria-label="Share Button"
      type="button"
      onClick={handleClickShare}
      className="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
    >
      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

export default ShareButton;
