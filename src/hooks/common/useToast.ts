import { useContext } from 'react';
import { ToastContext } from '@/contexts/ToastContext';

export const useToast = () => {
  const toastHelpers = useContext(ToastContext);

  return toastHelpers;
};
