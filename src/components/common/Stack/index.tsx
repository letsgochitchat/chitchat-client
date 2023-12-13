import { type CSSProperties, type ForwardedRef, forwardRef, type HTMLAttributes } from 'react';

import { Flex } from '../Flex';

type StackProps = {
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  direction?: CSSProperties['flexDirection'];
  spacing?: CSSProperties['margin'];
} & HTMLAttributes<HTMLDivElement>;

export const Stack = forwardRef(function Stack(
  { children, spacing = 24, direction, align, justify, ...props }: StackProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <Flex
      ref={ref}
      direction={direction}
      align={align}
      justify={justify}
      style={{ gap: spacing ? spacing : undefined }}
      {...props}
    >
      {children}
    </Flex>
  );
});
