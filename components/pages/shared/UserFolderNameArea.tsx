import styled from 'styled-components';
import SubHeader from '../../common/SubHeader';
import { useContext } from 'react';
import { OwnerContext } from '@/pages/shared';
import Image from 'next/image';

const ImageProfile = styled.div`
  position: relative;
  margin: 2rem 0 1.2rem;
  width: 6rem;
  height: 6rem;

  @media (max-width: 767px) {
    margin: 1rem 0.6rem;
    width: 4rem;
    height: 4rem;
  }
`;

const UserName = styled.p`
  margin-bottom: 2rem;
  line-height: 2.4rem;
  font-size: 1.6rem;
  font-weight: 400;

  @media (max-width: 767px) {
    margin-bottom: 1rem;
    line-height: 1.7rem;
    font-size: 1.4rem;
  }
`;

const FolderName = styled.h1`
  margin-bottom: 6rem;
  line-height: 4.8rem;
  font-size: 4rem;
  font-weight: 600;

  @media (max-width: 767px) {
    margin-bottom: 4rem;
    line-height: 3.8rem;
    font-size: 3.2rem;
  }
`;

function UserFolderNameArea() {
  const { folderName, owner } = useContext(OwnerContext);

  return (
    <SubHeader>
      <ImageProfile>
        <Image fill src={owner.profileImageSource} alt="프로필 사진" />
      </ImageProfile>
      <UserName>{owner.name}</UserName>
      <FolderName>{folderName}</FolderName>
    </SubHeader>
  );
}

export default UserFolderNameArea;
