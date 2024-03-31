import styled from 'styled-components';
import SearchBar from '@/components/common/SearchBar';
import FolderArea from './FolderArea';
import { useSearch } from '@/hooks/search';

const MainArea = styled.main`
  margin: 0 auto;
  padding: 4rem 3.2rem;
  max-width: 106rem;
`;

const FolderSection = () => {
  const { searchString, handleChangeSearchString, handleResetSearchString } = useSearch('');

  return (
    <MainArea>
      <SearchBar
        searchString={searchString}
        onChangeSearchString={handleChangeSearchString}
        onResetSearchString={handleResetSearchString}
      />
      <FolderArea searchString={searchString} />
    </MainArea>
  );
};

export default FolderSection;
