import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { getSampleFolder } from '@/api/api';
import { Link } from '@/types/types';

interface SampleFolderContext {
  folderName: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  folderLinks: Link[];
}

const ownerDefault = {
  id: 0,
  name: '',
  profileImageSource: '',
};

const contextDefault = {
  folderName: '',
  owner: ownerDefault,
  folderLinks: [],
};

export const sampleFolderContext = createContext<SampleFolderContext>(contextDefault);

const SampleFolderProvider = ({ children }: PropsWithChildren) => {
  const [folderName, setFolderName] = useState('');
  const [owner, setOwner] = useState(ownerDefault);
  const [folderLinks, setFolderLinks] = useState<Link[]>([]);

  useEffect(() => {
    const fetchSampleFolder = async () => {
      const { name, owner, links } = await getSampleFolder();

      setFolderName(name);
      setOwner(owner);
      setFolderLinks(links);
    };

    fetchSampleFolder();
  }, []);

  return (
    <sampleFolderContext.Provider value={{ folderName, owner, folderLinks }}>{children}</sampleFolderContext.Provider>
  );
};

export default SampleFolderProvider;
