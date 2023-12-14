import { type CSSProperties, type ForwardedRef, forwardRef, type HTMLAttributes } from 'react';
import styled from '@emotion/styled';

type StackProps = {
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  direction?: 'vertical' | 'horizontal';
  spacing?: CSSProperties['gap'];
} & HTMLAttributes<HTMLDivElement>;

export const Stack = forwardRef(function Stack(
  { children, spacing = 24, direction = 'vertical', align, justify, ...props }: StackProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <StyledStack
      ref={ref}
      direction={direction}
      spacing={spacing}
      align={align}
      justify={justify}
      {...props}
    >
      {children}
    </StyledStack>
  );
});

const StyledStack = styled.div<StackProps>`
  display: flex;
  flex-direction: ${({ direction }) => (direction === 'vertical' ? 'column' : 'row')};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};

  > * {
    ${({ direction, spacing }) =>
      direction === 'vertical' ? `margin-bottom: ${spacing}px` : `margin-right: ${spacing}px`};
  }

  > *:last-child {
    margin: 0;
  }
`;
