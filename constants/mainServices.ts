import { v4 as uuidv4 } from 'uuid';

export const MAIN_SERVICES = [
  {
    id: uuidv4(),
    title: '원하는 링크를 저장하세요',
    highlight: '원하는 링크',
    description:
      '나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고 싶은 모든 것을 한 공간에 저장하세요.',
    image: '/images/screen-download.png',
    gradient: 'pink-to-blue',
  },
  {
    id: uuidv4(),
    title: '링크를 폴더로 관리 하세요',
    highlight: '관리',
    description: '나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.',
    image: '/images/screen-manage.png',
    gradient: 'yellow-to-blue',
  },
  {
    id: uuidv4(),
    title: '저장한 링크를 공유해 보세요',
    highlight: '공유',
    description: '여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게 쉽고 빠르게 링크를 공유해 보세요.',
    image: '/images/screen-share.png',
    gradient: 'blue-to-gray',
  },
  {
    id: uuidv4(),
    title: '저장한 링크를 검색해 보세요',
    highlight: '검색',
    description: '중요한 정보들을 검색으로 쉽게 찾아보세요.',
    image: '/images/screen-search.png',
    gradient: 'blue-to-blue',
  },
];
