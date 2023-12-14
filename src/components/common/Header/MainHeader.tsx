import Image from 'next/image';
import styled from '@emotion/styled';

import { AddIcon, MenuIcon } from '../Icons';

export const MainHeader = () => {
  return (
    <StyledMainHeader>
      <MenuIcon width={32} height={32} />
      <Image src="/png/logo.png" width={154} height={28} alt="Chitchat Logo" />
      <AddIcon width={32} height={32} />
    </StyledMainHeader>
  );
};

const StyledMainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray900};
  max-width: 480px;
  width: 100%;
  height: 48px;
  padding: 8px 16px;
`;
