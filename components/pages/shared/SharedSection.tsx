import styled from 'styled-components';
import FolderList from './FolderList';
import SearchBar from '@/components/common/SearchBar';
import { useSearch } from '@/hooks/search';

const SharedArea = styled.section`
  margin: 0 auto;
  padding: 4rem 0;
  max-width: 112.4rem;

  @media (max-width: 1199px) {
    padding: 4rem 3.2rem;
  }

  @media (max-width: 767px) {
    padding: 2rem 3.2rem;
  }
`;

const SharedSection = () => {
  const { searchString, handleChangeSearchString, handleResetSearchString } = useSearch('');

  return (
    <SharedArea>
      <SearchBar
        searchString={searchString}
        onChangeSearchString={handleChangeSearchString}
        onResetSearchString={handleResetSearchString}
      />
      <FolderList searchString={searchString} />
    </SharedArea>
  );
};

export default SharedSection;
