import { useState } from 'react';

export const useSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');

  const search = (value: string) => {
    triggerSearch(value);
  };

  const triggerSearch = (value: string) => {
    const keyword = value.trim();
    if (keyword) {
      setSearchKeyword(keyword);
    }
  };

  return {
    inputValue,
    searchKeyword,
    setInputValue,
    search,
  };
};
