import { useState } from 'react';

export const useOpenModal = (init: boolean) => {
  const [isOpenModal, setIsOpenModal] = useState(init);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return { isOpenModal, openModal, closeModal };
};
