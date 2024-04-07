import { v4 as uuidv4 } from 'uuid';

export const sampleUrl = 'https://dulcet-taiyaki-cc2f47.netlify.app/';

export const USER_ID = 4;

export const totalFolderName = '전체';
export const totalFolderId = uuidv4();

export const updateBtnsId = {
  share: uuidv4(),
  change: uuidv4(),
  delete: uuidv4(),
} as const;

export const modalTypes: {
  [key: string]: string;
} = {
  edit: uuidv4(),
  addFolder: uuidv4(),
  share: uuidv4(),
  deleteFolder: uuidv4(),
  deleteLink: uuidv4(),
  add: uuidv4(),
} as const;

export const exitBtnId = uuidv4();
export const modalBackground = uuidv4();
