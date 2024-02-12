'use client';

import React from 'react';
import { Button, Header, Input } from '@/components/common';
import styled from '@emotion/styled';

const CreatePage = () => {
  return (
    <StyledCreatePage>
      <Header title="채팅방 생성" onClose={() => {}} />

      <Input
        guideMessage="채팅방 주제를 입력해주세요"
        label="채팅방 주제"
        placeholder="최대 18글자"
      />

      <Button onClick={() => {}}>채팅방 생성</Button>
    </StyledCreatePage>
  );
};

export default CreatePage;

const StyledCreatePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;
  min-height: 100vh;
  width: 100%;
`;
