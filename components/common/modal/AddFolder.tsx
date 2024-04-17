import FolderNameInput from './folderNameInput/folderNameInput';
import Frame from './frame/Frame';
import SubmitButton from './submitButton/SubmitButton';
import Title from './title/Title';
import type { Modal } from '@/types/types';

interface AddFolderProps {
  onCloseModal: Modal['closeModal'];
}

const AddFolder = ({ onCloseModal }: AddFolderProps) => (
  <Frame onCloseModal={onCloseModal}>
    <Title title="폴더 추가" />
    <FolderNameInput />
    <SubmitButton className="gradient" content="추가하기" />
  </Frame>
);

export default AddFolder;
