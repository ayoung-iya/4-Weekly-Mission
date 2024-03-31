import UserFolderNameArea from '@/components/pages/shared/UserFolderNameArea';
import SharedSection from '@/components/pages/shared/SharedSection';
import { createContext, useEffect, useState } from 'react';
import { getSampleFolder } from '@/api/api';
import { LinkTypes } from '@/types/types';
import { LinkListContext } from '@/context/createContext.';

const ownerDefault = {
  id: 0,
  name: '',
  profileImageSource: '',
};

export const OwnerContext = createContext({ folderName: '', owner: ownerDefault });

export default function Shared() {
  const [folderName, setFolderName] = useState('');
  const [owner, setOwner] = useState(ownerDefault);
  const [folderLinks, setFolderLists] = useState<LinkTypes[]>([]);

  useEffect(() => {
    const fetchSampleFolder = async () => {
      const { name, owner, links } = await getSampleFolder();

      setFolderName(name);
      setOwner(owner);
      setFolderLists(links);
    };

    fetchSampleFolder();
  }, []);

  return (
    <OwnerContext.Provider value={{ owner, folderName }}>
      <LinkListContext.Provider value={folderLinks}>
        <UserFolderNameArea />
        <SharedSection />
      </LinkListContext.Provider>
    </OwnerContext.Provider>
  );
}
