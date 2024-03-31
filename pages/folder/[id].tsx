import { getUserFolders, getUserLinks } from '@/api/api';
import AddLinkArea from '@/components/pages/folder/AddLinkArea';
import FolderSection from '@/components/pages/folder/FolderSection';
import { FoldersContext, LinkListContext } from '@/context/createContext.';
import { Folder, LinkTypes } from '@/types/types';

//? context의 타입은 뭔가요?
export async function getServerSideProps(context: any) {
  const folderId = context.params['id'];
  let folderList, links;

  try {
    folderList = await getUserFolders();
    links = await getUserLinks(folderId);
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
