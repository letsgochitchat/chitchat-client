import { useEffect } from 'react';
import { useToast } from '@/hooks/common/useToast';
import { colors } from '@/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { CheckIcon } from '../Icons';
import { Text } from '..';

export type ToastProps = {
  message: string;
  id: number;
};

export const Toast = ({ id, message }: ToastProps) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [id, removeToast]);

  return (
    <StyledToast>
      <CheckIcon color={colors.secondary} width={24} height={24} />
      <Text styleType="body1" color="white">
        {message}
      </Text>
    </StyledToast>
  );
};

const StyledToast = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 48px;
  padding-right: 16px;
  padding-left: 12px;
  border-radius: 16px;
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    border: 1px solid ${theme.colors.gray600};
  `}
  box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.25);
`;
