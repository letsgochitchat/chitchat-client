'use client';

import ChatingSheet from '@/components/ChatingSheet/ChatingSheet';
import styled from '@emotion/styled';

const ChatPage = () => {
  return (
    <StyledChatPage>
      <ChatingSheet />
    </StyledChatPage>
  );
};

export default ChatPage;

const StyledChatPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;
  min-height: 100vh;
  width: 100%;
`;
