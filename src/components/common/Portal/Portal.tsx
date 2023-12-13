import { type PropsWithChildren, useState } from 'react';
import useDidMount from '@/hooks/common/useDidMount';
import { createPortal } from 'react-dom';

export const Portal = ({ children }: PropsWithChildren) => {
  const [container, setContainer] = useState<Element | null>(null);

  useDidMount(() => {
    if (document) {
      setContainer(document.body);
    }
  });

  if (!container) return null;

  return createPortal(children, container);
};

export default Portal;
