import styled from 'styled-components';
import { MouseEvent, useState } from 'react';
import { useOpenModal } from '@/hooks/modal';
import { modalTypes } from '@/util/constants';
import Share from '@/components/common/modal/Share';
import Edit from '@/components/common/modal/Edit';
import DeleteFolder from '@/components/common/modal/DeleteFolder';
import Image from 'next/image';

const ButtonList = [
  {
    modalName: 'share',
    name: '공유',
    imgUrl: '/icons/share.svg',
  },
  {
    modalName: 'edit',
    name: '이름변경',
    imgUrl: '/icons/pen.svg',
  },
  {
    modalName: 'deleteFolder',
    name: '삭제',
    imgUrl: '/icons/delete.svg',
  },
];

const UpdateButtonList = styled.ul`
  display: flex;
  gap: 1.2rem;
`;

const UpdateButton = styled.button`
  display: flex;
  gap: 0.4rem;
  line-height: 1.7rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-gray-600);
`;

interface UpdateBtnListProps {
  selectedFolderId: string;
  selectedFolderName: string;
}

const UpdateBtnList = ({ selectedFolderId, selectedFolderName }: UpdateBtnListProps) => {
  const [activeModal, setActiveModal] = useState('');
  const { isOpenModal, openModal, closeModal } = useOpenModal(false);

  const handleBtnClick = (e: MouseEvent) => {
    e.preventDefault();
    openModal();

    // Error 'dataset' does not exist on type 'EventTarget'
    // Error 'string | undefined' 형식의 인수는 'SetStateAction<string>' 형식의 매개 변수에 할당될 수 없습니다.
    if (!(e.target instanceof HTMLButtonElement)) return;
    setActiveModal(e.target.dataset.modal || '');
  };

  const handleCloseModal = () => {
    closeModal();
    setActiveModal('');
  };

  return (
    <>
      <UpdateButtonList>
        {ButtonList.map(({ modalName, name, imgUrl }) => (
          <li key={name}>
            <UpdateButton data-modal={modalTypes[modalName]} onClick={handleBtnClick}>
              <Image width={18} height={18} src={imgUrl} alt={name} />
              {name}
            </UpdateButton>
          </li>
        ))}
      </UpdateButtonList>
      {isOpenModal && activeModal === modalTypes.share && (
        <Share
          selectedFolderId={selectedFolderId}
          selectedFolderName={selectedFolderName}
          onCloseModal={handleCloseModal}
        />
      )}
      {isOpenModal && activeModal === modalTypes.edit && (
        <Edit onCloseModal={handleCloseModal} selectedFolderName={selectedFolderName} />
      )}
      {isOpenModal && activeModal === modalTypes.deleteFolder && (
        <DeleteFolder onCloseModal={handleCloseModal} selectedFolderName={selectedFolderName} />
      )}
    </>
  );
};
export default UpdateBtnList;
