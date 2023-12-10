import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from 'react';
import styled from '@emotion/styled';

type ButtonProps = {
  /**
   * Button의 비활성화를 정합니다.
   * @type boolean | undefined
   */
  disabled?: boolean;
  /**
   * Button의 너비를 정합니다.
   * @type string | undefined
   */
  width?: string;
  /**
   * Button 내부에 작성할 문자열을 정합니다.
   * @type string
   */
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef(function Button({
  disabled = false,
  width = '100%',
  children,
  ...props
}: ButtonProps) {
  return (
    <StyledButton disabled={disabled} width={width} {...props}>
      {children}
    </StyledButton>
  );
});

const StyledButton = styled.button<ButtonProps>`
  ${({ theme }) => theme.fonts.h4}
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme, disabled }) => (disabled ? theme.colors.gray400 : theme.colors.white)};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray600 : theme.colors.primary};
  width: ${({ width }) => width};
  height: 56px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  border-radius: 16px;

  &:hover {
    background-color: ${({ theme, disabled }) => !disabled && theme.colors.primaryHover};
  }
`;
