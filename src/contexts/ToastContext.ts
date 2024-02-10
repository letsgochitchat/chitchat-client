import { createContext } from 'react';

type ToastContextProps = {
  success: (message: string) => void;
  error: (message: string) => void;
  remove: (toastId: number) => void;
};

export const ToastContext = createContext<ToastContextProps>({
  success: () => {},
  error: () => {},
  remove: () => {},
});
