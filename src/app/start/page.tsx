'use client';

import Image from 'next/image';
import { Button } from '@/components/common';
import { BottomSheetModal } from '@/components/common/BottomSheetModal';
import styled from '@emotion/styled';
import { useOverlay } from '@toss/use-overlay';

const StartPage = () => {
  const overlay = useOverlay();

  const openLoginBottomSheetModal = () => {
    overlay.open(({ isOpen, close }) => <BottomSheetModal isOpen={isOpen} onClose={close} />);
  };

  return (
    <StyledStartPage>
      <Image
        src="/png/start-logo.png"
        width={260}
        height={151}
        style={{ marginTop: '233px' }}
        alt="Start Logo"
      />
      <Button onClick={openLoginBottomSheetModal}>시작하기</Button>
    </StyledStartPage>
  );
};

export default StartPage;

const StyledStartPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;
  min-height: 100vh;
  width: 100%;
`;
