import UserFolderNameArea from '@/components/pages/shared/UserFolderNameArea';
import SharedSection from '@/components/pages/shared/SharedSection';
import { createContext, useEffect, useState } from 'react';
import { getSampleFolder } from '@/api/api';
import type { LinkTypes } from '@/types/types';
import { LinkListContext } from '@/context/createContext.';

export async function getStaticProps() {
  const res = await getSampleFolder();
  const folderName = res.name;
  const owner = res.owner;
  const folderLinks = res.links;

  return { props: { folderName, owner, folderLinks } };
}

const ownerDefault = {
  id: 0,
  name: '',
  profileImageSource: '',
};

export const OwnerContext = createContext({ folderName: '', owner: ownerDefault });

interface SharedProps {
  folderName: '';
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  folderLinks: LinkTypes[];
}

export default function Shared({ folderName, owner, folderLinks }: SharedProps) {
  return (
    <OwnerContext.Provider value={{ owner, folderName }}>
      <LinkListContext.Provider value={folderLinks}>
        <UserFolderNameArea />
        <SharedSection />
      </LinkListContext.Provider>
    </OwnerContext.Provider>
  );
}
