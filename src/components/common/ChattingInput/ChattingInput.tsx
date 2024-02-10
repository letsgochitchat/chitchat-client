import { colors } from '@/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { InputHTMLAttributes, MouseEventHandler } from 'react';

import { CameraIcon } from '../Icons';
import { Text } from '../Text';

type ChattingInputProps = {
  isChatEnd: boolean;
  onSend: MouseEventHandler<HTMLButtonElement>; // todo: 네이밍 다시 고려해보기
} & InputHTMLAttributes<HTMLInputElement>;

export const ChattingInput = ({
  onChange,
  onSend,
  value,
  isChatEnd,
  ...props
}: ChattingInputProps) => {
  const sendButtonColor = isChatEnd ? 'gray500' : Boolean(value) ? 'secondary' : 'gray400';

  return (
    <StyledChattingInputWrapper>
      <StyledCameraButton isChatEnd={isChatEnd}>
        <CameraIcon width={20} height={20} color={colors.black} />
      </StyledCameraButton>
      <StyledChattingInput
        onChange={onChange}
        value={isChatEnd ? '' : value}
        placeholder={isChatEnd ? '채팅방이 폭파되었습니다.' : '메세지 보내기...'}
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

const StyledCameraButton = styled.button<{ isChatEnd: boolean }>`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background-color: ${({ theme, isChatEnd }) =>
    isChatEnd ? theme.colors.gray500 : theme.colors.secondary};
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
