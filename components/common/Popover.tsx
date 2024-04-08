import { MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import { modalTypes } from '@/util/constants';
import styles from './Popover.module.css';
import DeleteLink from './modal/DeleteLink';
import Add from './modal/Add';
import { useOpenModal } from '@/hooks/modal';

interface PopoverProps {
  url: string;
  show: boolean;
  onPopoverClick: (e: MouseEvent) => void;
}

const Popover = ({ url, show, onPopoverClick }: PopoverProps) => {
  const {
    isOpenModal: isOpenDeleteModal,
    openModal: openDeleteModal,
    closeModal: closeDeleteModal,
  } = useOpenModal(false);
  const { isOpenModal: isOpenAddModal, openModal: openAddModal, closeModal: closeAddModal } = useOpenModal(false);

  return (
    <>
      {show && (
        <div className={styles.container} onClick={onPopoverClick}>
          <button className={`popover-item ${styles.btn}`} data-modal={modalTypes.deleteLink} onClick={openDeleteModal}>
            삭제하기
          </button>
          <button className={`popover-item ${styles.btn}`} data-modal={modalTypes.add} onClick={openAddModal}>
            폴더에 추가
          </button>
        </div>
      )}
      {isOpenDeleteModal && createPortal(<DeleteLink link={url} onCloseModal={closeDeleteModal} />, document.body)}
      {isOpenAddModal && createPortal(<Add link={url} onCloseModal={closeAddModal} />, document.body)}
    </>
  );
};

export default Popover;
