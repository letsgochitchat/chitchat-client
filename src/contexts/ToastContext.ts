import { createContext } from 'react';

type ToastContextProps = {
  addToast: (message: string) => void;
  removeToast: (toastId: number) => void;
};

export const ToastContext = createContext<ToastContextProps>({
  addToast: () => {},
  removeToast: () => {},
});
