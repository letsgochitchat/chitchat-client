import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { InputHTMLAttributes, MouseEventHandler } from 'react';

import { IconCamera } from '../Icons/IconCamera';
import { Text } from '../Text';

type ChattingInputProps = {
  isChatAlive: boolean;
  onClickSendButton: MouseEventHandler<HTMLButtonElement>;
} & InputHTMLAttributes<HTMLInputElement>;

export const ChattingInput = ({
  isChatAlive,
  value,
  onClickSendButton,
  ...props
}: ChattingInputProps) => {
  const sendButtonColor = isChatAlive ? (!!value ? 'secondary' : 'gray400') : 'gray500';

  return (
    <StyledChattingInputWrapper>
      <StyledCameraButton isChatAlive={isChatAlive}>
        <IconCamera />
      </StyledCameraButton>
      <StyledChattingInput
        value={value}
        placeholder={isChatAlive ? '내용을 입력해주세요.' : '채팅방이 폭파되었습니다.'}
        disabled={!isChatAlive}
        {...props}
      />
      <button type="button" onClick={onClickSendButton}>
        <Text styleType="body1" color={sendButtonColor}>
          보내기
        </Text>
      </button>
    </StyledChattingInputWrapper>
  );
};

const StyledChattingInputWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 4px;
  padding-right: 12px;
  border-radius: 20px;
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray600};
    background-color: ${theme.colors.black};
  `};
`;

const StyledCameraButton = styled.button<{ isChatAlive: boolean }>`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background-color: ${({ theme, isChatAlive }) =>
    isChatAlive ? theme.colors.secondary : theme.colors.gray500};
`;

const StyledChattingInput = styled.input`
  border: none;
  outline: none;
  flex-grow: 1;

  ${({ theme }) => css`
    ${theme.fonts.p1}
    color: ${theme.colors.white};
    background-color: ${theme.colors.black};

    ::placeholder {
      color: ${theme.colors.gray400};
    }
  `}
`;
