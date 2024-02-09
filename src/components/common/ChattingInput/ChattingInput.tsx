import { colors } from '@/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { InputHTMLAttributes, MouseEventHandler } from 'react';

import { IconCamera } from '../Icons/IconCamera';
import { IconSend } from '../Icons/Send';

type ChattingInputProps = {
  isChatEnd: boolean;
  onSend: MouseEventHandler<HTMLButtonElement>;
} & InputHTMLAttributes<HTMLInputElement>;

export const ChattingInput = ({
  onChange,
  onSend,
  value,
  isChatEnd,
  ...props
}: ChattingInputProps) => {
  return (
    <StyledChattingInputWrapper>
      <IconCamera width={24} height={24} color={colors.gray400} />
      <StyledChattingInput
        onChange={onChange}
        value={isChatEnd ? '' : value}
        placeholder={isChatEnd ? '채팅방이 폭파되었습니다.' : '메세지 보내기...'}
        disabled={isChatEnd}
        {...props}
      />
      <StyledSendButton onClick={onSend} isChatEnd={isChatEnd} isValidValue={Boolean(value)}>
        <IconSend width={24} height={24} color={colors.black} />
      </StyledSendButton>
    </StyledChattingInputWrapper>
  );
};

const StyledChattingInputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 5px 12px;
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.gray600};
    background-color: ${theme.colors.black};
  `};
`;

const StyledChattingInput = styled.input`
  border: none;
  outline: none;
  padding: 0 10px;
  height: 100%;
  width: 100%;
  border-radius: 16px;

  ${({ theme }) => css`
    ${theme.fonts.p1}
    color: ${theme.colors.gray400};
    background-color: ${theme.colors.gray700};

    ::placeholder {
      color: ${theme.colors.gray400};
    }
  `}
`;

const StyledSendButton = styled.button<{ isChatEnd: boolean; isValidValue: boolean }>`
  position: absolute;
  right: 10px;
  background-color: ${({ isChatEnd, isValidValue, theme }) =>
    isChatEnd || isValidValue ? theme.colors.gray500 : theme.colors.secondary};
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
`;
