import { type CSSProperties, type ForwardedRef, forwardRef, type HTMLAttributes } from 'react';

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
  const styles = {
    display: 'flex',
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap,
    flexBasis: basis,
    flexGrow: grow,
    flexShrink: shrink,
  };

  return (
    <div ref={ref} style={styles} {...props}>
      {children}
    </div>
  );
});

Flex.displayName = 'Flex';
