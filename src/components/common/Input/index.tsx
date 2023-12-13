import { type ForwardedRef, forwardRef, type InputHTMLAttributes } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Text } from '../Text';

type InputProps = {
  label?: string;
  guideMessage?: string;
  width?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef(function Input(
  { label, guideMessage, width = '100%', onChange, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const hasGuideMessage = guideMessage !== undefined;

  return (
    <StyledInputWrapper width={width}>
      {hasGuideMessage && (
        <Text color="white" styleType="h3">
          {guideMessage}
        </Text>
      )}
      {label && (
        <Text color="gray400" style={{ marginTop: hasGuideMessage ? '24px' : '0px' }}>
          {label}
        </Text>
      )}
      <StyledInput ref={ref} label={label} onChange={onChange} {...props} />
    </StyledInputWrapper>
  );
});

const StyledInputWrapper = styled.div<{ width?: string }>`
  display: inline-flex;
  flex-direction: column;
  width: ${({ width }) => width};
`;

const StyledInput = styled.input<InputProps>`
  margin-top: ${({ label }) => (label ? '8px' : '0px')};
  width: 100%;
  height: 48px;
  border-radius: 16px;
  ${({ theme }) => css`
    background-color: ${theme.colors.gray500};
    ::placeholder {
      color: ${theme.colors.secondary};
    }
  `}
`;
