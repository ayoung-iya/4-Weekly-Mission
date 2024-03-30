import { MouseEvent, ReactNode } from 'react';
import styles from './Frame.module.css';
import { exitBtnId, modalBackground } from '@/util/constants';

const Frame = ({ children, onCloseModal }: { children: ReactNode; onCloseModal: () => void }) => {
  const handleCloseModal = (e: MouseEvent) => {
    // TODO: 제네릭으로 HTMLDivElement 해봤으나 id에서 에러가 뜬다.
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
