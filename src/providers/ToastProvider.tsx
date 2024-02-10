'use client';

import { type PropsWithChildren, useCallback, useState } from 'react';
import { ToastContext } from '@/contexts/ToastContext';

import { ToastContainer, type ToastProps } from '../components/common/Toast';

let id = 1;

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const success = useCallback(
    (message: string) => {
      setToasts(prevToasts => [...prevToasts, { id: id++, message, actionType: 'success' }]);
    },
    [setToasts]
  );

  const error = useCallback(
    (message: string) => {
      setToasts(prevToasts => [...prevToasts, { id: id++, message, actionType: 'error' }]);
    },
    [setToasts]
  );

  const remove = useCallback(
    (toastId: number) => {
      setToasts(prevToasts => prevToasts.filter(prevToast => prevToast.id !== toastId));
    },
    [setToasts]
  );

  return (
    <ToastContext.Provider value={{ success, error, remove }}>
      <ToastContainer toasts={toasts} />
      {children}
    </ToastContext.Provider>
  );
};
