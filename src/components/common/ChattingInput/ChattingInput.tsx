import { colors } from '@/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { InputHTMLAttributes, MouseEventHandler } from 'react';

import { IconCamera } from '../Icons/IconCamera';
import { Text } from '../Text';

type ChattingInputProps = {
  isChatEnd: boolean;
  onSend: MouseEventHandler<HTMLButtonElement>; // todo: 네이밍 다시 고려해보기
} & InputHTMLAttributes<HTMLInputElement>;

export const ChattingInput = ({ isChatEnd, value, onSend, ...props }: ChattingInputProps) => {
  const sendButtonColor = isChatEnd ? 'gray500' : Boolean(value) ? 'secondary' : 'gray400';

  return (
    <StyledChattingInputWrapper>
      <StyledCameraButton isChatAlive={isChatEnd}>
        <IconCamera width={20} height={20} color={colors.black} />
      </StyledCameraButton>
      <StyledChattingInput
        value={isChatEnd ? '' : value}
        placeholder={isChatEnd ? '채팅방이 폭파되었습니다.' : '내용을 입력해주세요.'}
        disabled={isChatEnd}
        {...props}
      />
      <button type="button" onClick={onSend}>
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
