'use client';

import React, { useState } from 'react';
import { Button, Header, Input } from '@/components/common';
import styled from '@emotion/styled';

const CreateChatPage = () => {
  const [title] = useState<string>('');

  return (
    <StyledCreateChatPage>
      <Header title="채팅방 생성" onClose={() => {}} />

      <Input
        guideMessage="채팅방 주제를 입력해주세요"
        label="채팅방 주제"
        placeholder="최대 18글자"
      />

      <Button onClick={() => {}} disabled={!title}>
        채팅방 생성
      </Button>
    </StyledCreateChatPage>
  );
};

export default CreateChatPage;

const StyledCreateChatPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;
  min-height: 100vh;
  width: 100%;
`;
