import { type ButtonHTMLAttributes, type ForwardedRef, forwardRef, type ReactNode } from 'react';
import styled from '@emotion/styled';

type GhostButtonProps = {
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

export const GhostButton = forwardRef(function Button(
  { width = '100%', children, ...props }: GhostButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <StyledGhostButton ref={ref} width={width} {...props}>
      {children}
    </StyledGhostButton>
  );
});

const StyledGhostButton = styled.button<GhostButtonProps>`
  ${({ theme }) => theme.fonts.h4}
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray700};
  width: ${({ width }) => width};
  height: 56px;
  cursor: 'pointer';
  border-radius: 16px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray600};
  }
`;
