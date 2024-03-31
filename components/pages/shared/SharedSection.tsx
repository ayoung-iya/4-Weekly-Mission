import styled from 'styled-components';
import FolderList from '@/components/common/FolderList';
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
  const search = useSearch('');

  return (
    <SharedArea>
      <SearchBar {...search} />
      <FolderList searchString={search.searchString} />
    </SharedArea>
  );
};

export default SharedSection;
