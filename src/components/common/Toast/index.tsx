import { colors } from '@/styles';
import styled from '@emotion/styled';

import { CheckIcon } from '../Icons';
import { Text } from '..';

type ToastProps = {
  message: string;
};

export const Toast = ({ message }: ToastProps) => {
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 48px;
  padding-right: 16px;
  padding-left: 12px;
  border-radius: 16px;
`;
