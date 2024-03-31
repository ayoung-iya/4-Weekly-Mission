import { useState } from 'react';
import FolderListArea from './FolderListArea';
import LinkList from './LinkList';
import { totalFolderId } from '@/util/constants';

interface FolderArea {
  searchString: string;
}

const FolderArea = ({ searchString }: FolderArea) => {
  const [selectedFolderId, setSelectedFolderId] = useState(totalFolderId);

  const handleFolderNameClick = (id: string) => {
    setSelectedFolderId(id);
  };

  return (
    <>
      <FolderListArea selectedFolderId={selectedFolderId} onFolderNameClick={handleFolderNameClick} />
      <LinkList selectedFolderId={selectedFolderId} searchString={searchString} />
    </>
  );
};

export default FolderArea;
