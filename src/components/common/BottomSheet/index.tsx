import { type ComponentProps, type MouseEventHandler } from 'react';
import { defaultEasing, defaultFadeInVariants } from '@/constants/motion';
import { theme } from '@/styles';
import styled from '@emotion/styled';
import { motion, type Variants } from 'framer-motion';

import { AnimatePortal } from '../Portal';

export type BottomSheetProps = {
  onClickOutside?: VoidFunction;
} & ComponentProps<typeof AnimatePortal>;

export const BottomSheet = ({ children, isShowing, mode, onClickOutside }: BottomSheetProps) => {
  const onClickOutsideDefault: MouseEventHandler<HTMLDivElement> = e => {
    if (e.target !== e.currentTarget) return;
    if (onClickOutside) onClickOutside();
  };

  return (
    <AnimatePortal isShowing={isShowing} mode={mode}>
      <StyledDIM
        onClick={onClickOutsideDefault}
        variants={defaultFadeInVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <StyledBottomSheet variants={bottomSheetVariants}>{children}</StyledBottomSheet>
      </StyledDIM>
    </AnimatePortal>
  );
};

const StyledDIM = styled(motion.div)`
  position: fixed;
  z-index: 900;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  margin: 0 auto;
`;

const StyledBottomSheet = styled(motion.div)`
  position: absolute;
  z-index: 1000;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 320px;
  max-height: 100%;
  padding-top: 12px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${theme.colors.gray900};
  border-radius: 32px 32px 0px 0px;
`;

const bottomSheetVariants: Variants = {
  initial: {
    y: 0,
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: 'transform',
  },
  animate: {
    y: '-100%',
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: 'transform',
  },
  exit: {
    y: 0,
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: 'transform',
  },
};
