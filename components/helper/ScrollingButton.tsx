import { Dispatch, MouseEventHandler, ReactNode, SetStateAction, useEffect } from 'react';

interface ScrollingButtonProps {
  label: string;
  setShow: Dispatch<SetStateAction<boolean>>;
  handleClick: MouseEventHandler;
  svg: ReactNode;
}

const ScrollingButton = ({ label, svg, setShow, handleClick }: ScrollingButtonProps) => {
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

  return (
    <button
      aria-label={label}
      type="button"
      onClick={handleClick}
      className="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
    >
      {svg}
    </button>
  );
};

export default ScrollingButton;
