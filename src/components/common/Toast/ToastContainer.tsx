import styled from '@emotion/styled';
import { createPortal } from 'react-dom';

import { Toast, type ToastProps } from '.';

type ToastContainerProps = {
  toasts: ToastProps[];
};

export const ToastContainer = ({ toasts }: ToastContainerProps) => {
  if (typeof document !== 'undefined') {
    return createPortal(
      <StyledToastList>
        {toasts.map(toast => (
          <Toast key={toast.id} id={toast.id} message={toast.message} />
        ))}
      </StyledToastList>,
      document.body
    );
  }

  return null;
};

const StyledToastList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  left: 50%;
  top: 52px;
  transform: translate(-50%, -52px);
`;
