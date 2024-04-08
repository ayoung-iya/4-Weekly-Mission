import { getUserFolders, getUserLinks } from '@/api/api';
import AddLinkArea from '@/components/pages/folder/AddLinkArea';
import FolderSection from '@/components/pages/folder/FolderSection';
import { FoldersContext, LinkListContext } from '@/context/createContext.';
import type { Folder, LinkTypes } from '@/types/types';
import { totalFolderId } from '@/util/constants';

export async function getServerSideProps() {
  try {
    const folderList = await getUserFolders();
    const links = await getUserLinks(totalFolderId);

    return { props: { folderList, links } };
  } catch {
    return {
      notFound: true,
    };
  }
}

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
