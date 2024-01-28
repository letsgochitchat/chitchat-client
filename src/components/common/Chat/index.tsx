import React, { type HTMLAttributes } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

import { Text } from '..';

type ChatProps = {
  isMine: boolean;
  nickname: string;
  message?: string;
  imageUrl?: string;
} & HTMLAttributes<HTMLDivElement>;

export const Chat = ({ isMine, nickname, message, imageUrl, ...props }: ChatProps) => {
  return (
    <StyledChatWrapper isMine={isMine} {...props}>
      <Text color="gray400" styleType="p3">
        {nickname}
      </Text>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="image"
          width={200}
          height={120}
          style={{
            width: 'auto',
            maxWidth: '300px',
            height: '120px',
          }}
        />
      )}
      {message && (
        <StyledChattingBox color="white" styleType="p2" isMine={isMine}>
          {message}
        </StyledChattingBox>
      )}
    </StyledChatWrapper>
  );
};

const StyledChatWrapper = styled.div<{ isMine: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ isMine }) => (isMine ? 'flex-end' : 'flex-start')};
  gap: 4px;
`;

const StyledChattingBox = styled(Text)<{ isMine: boolean }>`
  max-width: 244px;
  padding: 8px 12px;
  background-color: ${({ theme, isMine }) => theme.colors[isMine ? 'gray700' : 'black']};
  border: 1px solid ${({ theme }) => theme.colors.gray700};
  border-radius: 22px;
  white-space: pre-wrap;
  word-break: break-all;
  word-wrap: break-word;
`;
