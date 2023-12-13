import { type ForwardedRef, forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { type ColorKeys, type FontKeys } from '@/styles';
import styled from '@emotion/styled';

export type TextProps = {
  styleType?: FontKeys;
  tag?: 'p' | 'span';
  color?: ColorKeys;
  children: ReactNode;
} & HTMLAttributes<HTMLSpanElement>;

export const Text = forwardRef(function Text(
  { tag = 'span', children, styleType: textStyle = 'p1', color = 'gray900', ...props }: TextProps,
  ref: ForwardedRef<HTMLSpanElement>
) {
  return (
    <StyledText ref={ref} as={tag} color={color} styleType={textStyle} {...props}>
      {children}
    </StyledText>
  );
});

const StyledText = styled.span<{ color: ColorKeys; styleType: FontKeys }>`
  color: ${({ color, theme }) => color && theme.colors[color]};
  ${({ theme, styleType }) => theme.fonts[styleType]};
`;
