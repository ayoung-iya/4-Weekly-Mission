import { getUserFolders, getUserLinks } from '@/api/api';
import AddLinkArea from '@/components/pages/folder/AddLinkArea';
import FolderSection from '@/components/pages/folder/FolderSection';
import { FoldersContext, LinkListContext } from '@/context/createContext.';
import type { Folder, LinkTypes } from '@/types/types';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async context => {
  // TODO: id는 string, string[], undefined가 될 수 있다.
  const { id } = context.query;

  if (!id) return { notFound: true };

  try {
    const folderList = await getUserFolders();
    const links = await getUserLinks(id);

    return { props: { folderList, links } };
  } catch {
    return {
      notFound: true,
    };
  }
};

const FolderPage = ({ folderList, links }: { folderList: Folder[]; links: LinkTypes[] }) => {
  return (
    <FoldersContext.Provider value={folderList}>
      <LinkListContext.Provider value={links}>
        <AddLinkArea />
        <FolderSection />
      </LinkListContext.Provider>
    </FoldersContext.Provider>
  );
};

export default FolderPage;
