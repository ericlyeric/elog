import React from 'react';
import { useSearchContext } from '../context/SearchContext';
import { SearchIcon } from '../helper/Icons';

const SearchBar = () => {
  const { searchValue, setSearchValue } = useSearchContext();

  return (
    <>
      <input
        aria-label="Search articles"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search articles"
        className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
      />
      <SearchIcon />
    </>
  );
};

export default SearchBar;
