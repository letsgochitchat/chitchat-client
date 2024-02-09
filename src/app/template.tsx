'use client';

import { type PropsWithChildren } from 'react';
import { ToastProvider } from '@/providers/ToastProvider';
import { theme } from '@/styles';
import styled from '@emotion/styled';
import { OverlayProvider } from '@toss/use-overlay';

const Template = ({ children }: PropsWithChildren) => {
  return (
    <ToastProvider>
      <OverlayProvider>
        <StyledLayout>{children}</StyledLayout>
      </OverlayProvider>
    </ToastProvider>
  );
};

export default Template;

const StyledLayout = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.gray900};
  width: 100%;
  margin: 0 auto;
  padding: 0px 16px;
`;
