import { type ForwardedRef, forwardRef, type SVGAttributes } from 'react';
import { type ColorKeys } from '@/styles';
import styled from '@emotion/styled';
import Close from 'public/icons/close.svg';
import Google from 'public/icons/google.svg';
import Kakao from 'public/icons/kakao.svg';

export type IconType = keyof typeof ICON_TYPES;
export type IconProps = {
  size?: number;
  color?: ColorKeys;
  type: IconType;
} & SVGAttributes<HTMLOrSVGElement>;

export const ICON_TYPES = {
  google: Google,
  kakao: Kakao,
  close: Close,
} as const;

export const Icon = forwardRef(function Icon(
  { type, size = 24, color = 'white', style, ...props }: IconProps,
  ref: ForwardedRef<SVGSVGElement>
) {
  const IconSvg = ICON_TYPES[type];

  return (
    <StyledIcon color={color} style={style}>
      <IconSvg ref={ref} height={size} width={size} {...props} />
    </StyledIcon>
  );
});

const StyledIcon = styled.i<{ color: ColorKeys }>`
  display: flex;
  color: ${({ theme, color }) => theme.colors[color]};
`;
