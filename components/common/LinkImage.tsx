import styled from 'styled-components';

const ImageGroup = styled.div`
  position: relative;
  height: 20rem;
  border-radius: 1.5rem 1.5rem 0 0;
  overflow: hidden;
`;

export const ImageCard = styled.div<{ image: string }>`
  width: 100%;
  height: 100%;
  background: ${({ image }) => (image ? `url(${image})` : `url('/icons/no-image.svg')`)} no-repeat center/cover;
  transition: all 0.3s ease-in-out;
`;

const ButtonStar = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 3.4rem;
  height: 3.4rem;
  background: url('/icons/star.svg') no-repeat center/cover;
`;

const LinkImage = ({ image }: { image: string }) => (
  <ImageGroup>
    <ImageCard image={image} />
    <ButtonStar />
  </ImageGroup>
);

export default LinkImage;
