import { getUserFolders } from '@/api/api';
import AddLinkArea from '@/components/pages/folder/AddLinkArea';
import FolderSection from '@/components/pages/folder/FolderSection';
import { FoldersContext } from '@/context/createContext.';
import { Folder } from '@/types/types';
import { useEffect, useState } from 'react';

const FolderPage = () => {
  const [folderList, setFolderList] = useState<Folder[]>([]);

  useEffect(() => {
    const handleFolderLoad = async () => {
      try {
        const folders = await getUserFolders();
        setFolderList(folders);
      } catch (err) {
        console.error(err);
      }
    };

    handleFolderLoad();
  }, []);

  return (
    <FoldersContext.Provider value={folderList}>
      <AddLinkArea />
      <FolderSection />
    </FoldersContext.Provider>
  );
};

export default FolderPage;
