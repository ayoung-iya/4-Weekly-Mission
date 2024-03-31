import styled from 'styled-components';
import { useContext } from 'react';
import { createPortal } from 'react-dom';
import FolderNameButton from './FolderNameButton';
import { FoldersContext } from '@/context/createContext.';
import { useOpenModal } from '@/hooks/modal';
import { modalTypes, totalFolderId, totalFolderName } from '@/util/constants';
import AddFolder from '@/components/common/modal/AddFolder';
import { useRouter } from 'next/router';

const FolderGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.4rem;

  @media (max-width: 767px) {
    margin-bottom: 2.8rem;
  }
`;

const FolderList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.8rem;
`;

const Button = styled.button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  line-height: 1.9rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-primary);
  letter-spacing: -0.03rem;

  &::after {
    content: '';
    display: block;
    width: 1.6rem;
    height: 1.6rem;
    background: url('/icons/add.svg') no-repeat center bottom/contain;
  }

  @media (max-width: 767px) {
    position: fixed;
    left: 50%;
    bottom: 10.1rem;
    transform: translateX(-50%);
    padding: 0.8rem 2.4rem;
    height: 3.5rem;
    border: 1px solid var(--color-white);
    border-radius: 2rem;
    background-color: var(--color-primary);
    color: var(--color-gray-300);
    z-index: 10;

    &::after {
      background: url('/icons/add-white.png') no-repeat center bottom/contain;
    }
  }
`;

const FolderListArea = () => {
  const folderList = useContext(FoldersContext);
  const { isOpenModal, openModal, closeModal } = useOpenModal(false);
  const { query } = useRouter();
  const currentId = (query.id as string) || totalFolderId;

  return (
    <FolderGroup>
      <FolderList>
        <li>
          <FolderNameButton id={totalFolderId} currentId={currentId}>
            {totalFolderName}
          </FolderNameButton>
        </li>
        {folderList.map(({ id, name }) => (
          <li key={id}>
            <FolderNameButton id={id} currentId={currentId}>
              {name}
            </FolderNameButton>
          </li>
        ))}
      </FolderList>
      <Button data-modal={modalTypes.addFolder} onClick={openModal}>
        폴더 추가
      </Button>
      {isOpenModal && createPortal(<AddFolder onCloseModal={closeModal} />, document.body)}
    </FolderGroup>
  );
};

export default FolderListArea;
