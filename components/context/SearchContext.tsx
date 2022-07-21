import * as React from 'react';

interface SearchContextProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchContext = React.createContext<SearchContextProps>({
  searchValue: '',
  setSearchValue: () => {},
});

interface SearchProviderProps {
  children: React.ReactNode;
}

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = React.useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }
  return context;
};
