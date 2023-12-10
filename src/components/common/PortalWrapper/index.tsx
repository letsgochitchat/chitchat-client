import { type PropsWithChildren } from 'react';
import { AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

type PortalWrapperProps = PropsWithChildren<{ isShowing: boolean }>;

export const PortalWrapper = ({ children, isShowing }: PortalWrapperProps) => {
  const container = typeof window !== 'undefined' && document.body;

  return container
    ? createPortal(
        <AnimatePresence mode="wait">{isShowing && children}</AnimatePresence>,
        container
      )
    : null;
};
