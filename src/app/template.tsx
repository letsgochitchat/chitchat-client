'use client';

import { type PropsWithChildren } from 'react';
import { theme } from '@/styles';
import styled from '@emotion/styled';
import { OverlayProvider } from '@toss/use-overlay';

const Template = ({ children }: PropsWithChildren) => {
  return (
    <OverlayProvider>
      <StyledLayout>{children}</StyledLayout>
    </OverlayProvider>
  );
};

export default Template;

const StyledLayout = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.gray900};
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  padding: 0px 16px;
`;
