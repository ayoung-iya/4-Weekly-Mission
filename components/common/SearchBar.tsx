import styled from 'styled-components';
import TextInput from './TextInput';
import { ChangeEventHandler } from 'react';
import Image from 'next/image';

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  padding: 1.5rem 1.6rem;
  width: 100%;
  border-radius: 1rem;
  background-color: var(--color-gray-100);

  &::before {
    content: '';
    display: block;
    margin-right: 1rem;
    min-width: 1.6rem;
    min-height: 1.6rem;
    background: url('/icons/search.svg') no-repeat center/contain;
  }

  @media (max-width: 767px) {
    margin-bottom: 3.2rem;
    padding: 1.3rem 1.6rem;

    &::before {
      margin-right: 0.6rem;
    }
  }
`;

const SearchMessage = styled.div`
  margin-bottom: 4rem;
  font-size: 3.2rem;
  font-weight: 600;
  letter-spacing: -0.02rem;
  color: var(--color-gray-600);

  @media (max-width: 767px) {
    margin-bottom: 3.2rem;
    font-size: 2.4rem;
  }
`;

const BoldString = styled.b`
  color: #373740;
`;

const CloseButton = styled.button`
  position: relative;
  width: 2.4rem;
  height: 2.4rem;
`;

interface SearchBarProps {
  searchString: string;
  handleChangeSearchString: ChangeEventHandler<HTMLInputElement>;
  handleResetSearchString: () => void;
}

const SearchBar = ({ searchString, handleChangeSearchString, handleResetSearchString }: SearchBarProps) => {
  return (
    <>
      <InputGroup>
        <TextInput
          type="text"
          value={searchString}
          onChange={handleChangeSearchString}
          placeholder="링크를 검색해 보세요"
        />
        {searchString !== '' && (
          <CloseButton onClick={handleResetSearchString}>
            <Image fill src="/icons/close.png" alt="검색어 초기화" />
          </CloseButton>
        )}
      </InputGroup>
      {searchString !== '' && (
        <SearchMessage>
          <BoldString>{searchString}</BoldString>으로 검색한 결과입니다.
        </SearchMessage>
      )}
    </>
  );
};

export default SearchBar;
