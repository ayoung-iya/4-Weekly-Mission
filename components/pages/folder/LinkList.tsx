import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import UpdateBtnList from './UpdateBtnList';
import { Folder, LinkTypes } from '@/types/types';
import { totalFolderName } from '@/util/constants';
import { FoldersContext, LinkListContext } from '@/context/createContext.';
import { getUserLinks } from '@/api/api';
import FolderList from '@/components/common/FolderList';

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
  selectedFolderId: string;
  searchString: string;
}

const LinkList = ({ selectedFolderId, searchString }: LinkListProps) => {
  const folders = useContext(FoldersContext);
  const [links, setLinks] = useState<LinkTypes[]>([]);

  const selectedFolderName = selectFolderName(folders, selectedFolderId);

  useEffect(() => {
    const fetchLinks = async (id: string) => {
      try {
        const links = await getUserLinks(id);
        setLinks(links);
      } catch (err) {
        console.error(err);
      }
    };

    fetchLinks(selectedFolderId);
  }, [selectedFolderId]);

  return (
    <LinkListContext.Provider value={links}>
      <Header>
        <Title>{selectedFolderName}</Title>
        {selectedFolderName !== totalFolderName && (
          <UpdateBtnList selectedFolderId={selectedFolderId} selectedFolderName={selectedFolderName} />
        )}
      </Header>
      <FolderList searchString={searchString} />
    </LinkListContext.Provider>
  );
};
export default LinkList;
