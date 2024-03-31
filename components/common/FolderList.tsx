import styled from 'styled-components';
import LinkCard from './LinkCard';
import { useContext, useEffect, useState } from 'react';
import { Link } from '@/types/types';
import { LinkListContext } from '@/context/createContext.';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem 2rem;

  @media (max-width: 767px) {
    row-gap: 2rem;
  }
`;

const NoLinks = styled.p`
  padding: 4.1rem 0 3.5rem;
  width: 100%;
  line-height: 2.4rem;
  font-size: 1.6rem;
  text-align: center;
`;

interface FolderListProps {
  searchString: string;
}

const FolderList = ({ searchString }: FolderListProps) => {
  const folderLinks = useContext(LinkListContext);
  const [selectedFolderLinks, setSelectedFolderLinks] = useState<Link[]>(folderLinks);

  useEffect(() => {
    const timerId = setTimeout(() => {
      const newFolderLinks = folderLinks.filter(
        links =>
          links.url.toLowerCase().includes(searchString.toLowerCase()) ||
          links.title?.toLowerCase().includes(searchString.toLowerCase()) ||
          links.description?.toLowerCase().includes(searchString.toLowerCase())
      );

      setSelectedFolderLinks(newFolderLinks);
    }, 200);

    return () => clearTimeout(timerId);
  }, [searchString, folderLinks]);

  if (folderLinks.length === 0) {
    return <NoLinks>저장된 링크가 없습니다.</NoLinks>;
  }

  return (
    <List>
      {selectedFolderLinks.length === 0 ? (
        <NoLinks>일치하는 링크가 없습니다</NoLinks>
      ) : (
        selectedFolderLinks.map(({ id, url, description, createdAt, imageSource }) => (
          <LinkCard key={id} url={url} createdAt={createdAt} description={description} imageSource={imageSource} />
        ))
      )}
    </List>
  );
};

export default FolderList;
