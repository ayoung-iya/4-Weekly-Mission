import { ChangeEvent, useState } from 'react';

export const useSearch = (init = '') => {
  const [searchString, setSearchString] = useState(init);

  const handleChangeSearchString = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  const handleResetSearchString = () => setSearchString('');

  return { searchString, handleChangeSearchString, handleResetSearchString };
};
