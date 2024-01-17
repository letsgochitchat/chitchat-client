import { type PropsWithChildren, useCallback, useState } from 'react';
import { ToastContext } from '@/contexts/ToastContext';

import { ToastContainer } from './ToastContainer';
import { type ToastProps } from '.';

let id = 1;

type ToastProviderProps = PropsWithChildren;

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = useCallback(
    (message: string) => {
      setToasts(prevToasts => [...prevToasts, { id: id++, message }]);
    },
    [setToasts]
  );

  const removeToast = useCallback(
    (toastId: number) => {
      setToasts(prevToasts => prevToasts.filter(toast => toast.id !== toastId));
    },
    [setToasts]
  );

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <ToastContainer toasts={toasts} />
      {children}
    </ToastContext.Provider>
  );
};
