import styled from 'styled-components';
import { useContext } from 'react';
import UpdateBtnList from './UpdateBtnList';
import type { Folder } from '@/types/types';
import { totalFolderId, totalFolderName } from '@/util/constants';
import { FoldersContext } from '@/context/createContext.';
import FolderList from '@/components/common/FolderList';
import { useRouter } from 'next/router';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.4rem;
  width: 100%;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
    margin-bottom: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  letter-spacing: -0.02rem;

  @media (max-width: 767px) {
    font-size: 2rem;
  }
`;

const selectFolderName = (folders: Folder[], selectedFolderId: string) => {
  const selectedFolder = folders.filter(folder => folder.id === selectedFolderId)[0];
  return selectedFolder?.name || totalFolderName;
};

interface LinkListProps {
  searchString: string;
}

const LinkList = ({ searchString }: LinkListProps) => {
  const folders = useContext(FoldersContext);
  const { query } = useRouter();
  const currentId = (query.id as string) || totalFolderId;
  const selectedFolderName = selectFolderName(folders, currentId);

  return (
    <>
      <Header>
        <Title>{selectedFolderName}</Title>
        {selectedFolderName !== totalFolderName && (
          <UpdateBtnList currentId={currentId} selectedFolderName={selectedFolderName} />
        )}
      </Header>
      <FolderList searchString={searchString} />
    </>
  );
};
export default LinkList;
