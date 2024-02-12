'use client';

import { type ChangeEvent, useState } from 'react';
import { Button, Header, Input } from '@/components/common';
import styled from '@emotion/styled';

const CreateChatPage = () => {
  const [title, setTitle] = useState('');

  const handleTitleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <StyledCreateChatPage>
      <Header title="채팅방 생성" onClose={() => {}} />

      <Input
        guideMessage="채팅방 주제를 입력해주세요"
        label="채팅방 주제"
        placeholder="최대 18글자"
        onChange={handleTitleInput}
      />

      <Button
        onClick={() => {}}
        disabled={!title}
        style={{ position: 'fixed', bottom: 24, maxWidth: '448px' }}
      >
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
  gap: 140px;
  min-height: 100vh;
  width: 100%;
`;
