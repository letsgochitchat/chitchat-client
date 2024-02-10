import { useEffect } from 'react';
import { useToast } from '@/hooks/common/useToast';
import { colors } from '@/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ToastErrorIcon, ToastSuccessIcon } from '../Icons';
import { Text } from '..';

export type ToastProps = {
  message: string;
  actionType?: 'success' | 'error';
  id: number;
};

export const Toast = ({ id, message, actionType = 'success' }: ToastProps) => {
  const toast = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      toast.remove(id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [id, toast]);

  return (
    <StyledToast>
      {actionType === 'success' ? (
        <ToastSuccessIcon color={colors.secondary} width={24} height={24} />
      ) : (
        <ToastErrorIcon color={colors.red} width={24} height={24} />
      )}
      <Text styleType="body1" color="white">
        {message}
      </Text>
    </StyledToast>
  );
};

const slideDownAnimation = css`
  @keyframes slideDown {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  animation: slideDown 0.18s ease-out;
`;

const StyledToast = styled.div`
  ${slideDownAnimation}

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
