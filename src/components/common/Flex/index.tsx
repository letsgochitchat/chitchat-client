import { type CSSProperties, type ForwardedRef, forwardRef, type HTMLAttributes } from 'react';
import styled from '@emotion/styled';

export type FlexOptions = {
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  wrap?: CSSProperties['flexWrap'];
  direction?: CSSProperties['flexDirection'];
  basis?: CSSProperties['flexBasis'];
  grow?: CSSProperties['flexGrow'];
  shrink?: CSSProperties['flexShrink'];
};

export type FlexProps = HTMLAttributes<HTMLDivElement> & FlexOptions;

export const Flex = forwardRef(function Flex(
  { children, direction, align, justify, wrap, basis, grow, shrink, ...props }: FlexProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <StyledFlex
      ref={ref}
      direction={direction}
      align={align}
      justify={justify}
      wrap={wrap}
      basis={basis}
      grow={grow}
      shrink={shrink}
      {...props}
    >
      {children}
    </StyledFlex>
  );
});

const StyledFlex = styled.div<FlexOptions>`
  display: flex;
  flex-direction: ${({ direction }) => direction && direction};
  align-items: ${({ align }) => align && align};
  justify-content: ${({ justify }) => justify && justify};
  flex-wrap: ${({ wrap }) => wrap && wrap};
  flex-basis: ${({ basis }) => basis && basis};
  flex-grow: ${({ grow }) => grow && grow};
  flex-shrink: ${({ shrink }) => shrink && shrink};
`;
