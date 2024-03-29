import { type HTMLAttributes } from 'react';
import styled from '@emotion/styled';

import { ArrowBackIcon, CloseIcon } from '../Icons';
import { Spacer } from '../Spacer';
import { Text } from '..';

type HeaderProps = {
  title: string;
  onClose?: VoidFunction;
  onBack?: VoidFunction;
} & HTMLAttributes<HTMLDivElement>;

export const Header = ({ title, onClose, onBack, ...props }: HeaderProps) => {
  return (
    <StyledHeader {...props}>
      {onBack ? (
        <ArrowBackIcon onClick={onBack} width={32} height={32} cursor="pointer" />
      ) : (
        <Spacer width={32} height={32} />
      )}
      <Text color="white" styleType="h4">
        {title}
      </Text>
      {onClose ? (
        <CloseIcon onClick={onClose} width={32} height={32} cursor="pointer" />
      ) : (
        <Spacer width={32} height={32} />
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.gray900};
`;
