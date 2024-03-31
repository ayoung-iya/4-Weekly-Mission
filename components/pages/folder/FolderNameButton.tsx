import styled from 'styled-components';
import { ReactNode } from 'react';
import Link from 'next/link';
import { totalFolderId } from '@/util/constants';

const Button = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.8rem 1.2rem;
  height: 3.7rem;
  border: 1px solid var(--color-primary);
  border-radius: 0.5rem;
  font-size: 1.6rem;
  background-color: ${({ $active }) => ($active ? `var(--color-primary)` : 'inherit')};
  color: ${({ $active }) => ($active ? `var(--color-white)` : '#000')};
  white-space: nowrap;

  @media (max-width: 767px) {
    padding: 0.6rem 1rem;
    font-size: 1.4rem;
    height: 3.1rem;
  }
`;

interface FolderNameButtonProp {
  id: string;
  currentId: string;
  children?: ReactNode;
}

const FolderNameButton = ({ id, currentId, children }: FolderNameButtonProp) => {
  const linkHref = id === totalFolderId ? '/folder' : `/folder/${id}`;

  return (
    <Button $active={id === currentId}>
      <Link href={linkHref}>{children}</Link>
    </Button>
  );
};
export default FolderNameButton;
