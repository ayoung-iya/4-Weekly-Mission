import { getUserFolders, getUserLinks } from '@/api/api';
import AddLinkArea from '@/components/pages/folder/AddLinkArea';
import FolderSection from '@/components/pages/folder/FolderSection';
import { FoldersContext, LinkListContext } from '@/context/createContext.';
import { Folder, LinkTypes } from '@/types/types';
import { totalFolderId } from '@/util/constants';

export async function getServerSideProps() {
  let folderList, links;

  try {
    folderList = await getUserFolders();
    links = await getUserLinks(totalFolderId);
  } catch {
    return {
      notFound: true,
    };
  }

  return { props: { folderList, links } };
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
