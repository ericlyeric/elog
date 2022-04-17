import React, { Dispatch } from "react";
import { SearchIcon } from "../helper/Icons";

interface SearchBarProps {
  value: string;
  setValue: Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ value, setValue }: SearchBarProps) => {
  return (
    <>
      <input
        aria-label="Search articles"
        type="text"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search articles"
        className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
      />
      <SearchIcon />
    </>
  );
};

export default SearchBar;
