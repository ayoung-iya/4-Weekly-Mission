import { MouseEvent, PropsWithChildren, ReactNode } from 'react';
import styles from './Frame.module.css';
import { exitBtnId, modalBackground } from '@/util/constants';
import { Modal } from '@/types/types';

interface FrameProps {
  onCloseModal: Modal['closeModal'];
}

const Frame = ({ children, onCloseModal }: PropsWithChildren<FrameProps>) => {
  const handleCloseModal = (e: MouseEvent) => {

    if (e.target instanceof HTMLDivElement || e.target instanceof HTMLButtonElement) {
      if (e.target.id === modalBackground || e.target.id === exitBtnId) {
        onCloseModal();
      }
    }
  };

  return (
    <div className={styles.background} onClick={handleCloseModal} id={modalBackground}>
      <div className={styles.modal}>
        {children}
        <button className={styles.exit} id={exitBtnId} />
      </div>
    </div>
  );
};

export default Frame;
