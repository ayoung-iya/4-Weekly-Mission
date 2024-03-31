import FolderListArea from './FolderListArea';
import LinkList from './LinkList';

interface FolderArea {
  searchString: string;
}

const FolderArea = ({ searchString }: FolderArea) => {
  return (
    <>
      <FolderListArea />
      <LinkList searchString={searchString} />
    </>
  );
};

export default FolderArea;
