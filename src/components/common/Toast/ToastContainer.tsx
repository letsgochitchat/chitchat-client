import styled from '@emotion/styled';
import { createPortal } from 'react-dom';

import { Toast, type ToastProps } from '.';

type ToastContainerProps = {
  toasts: ToastProps[];
};

export const ToastContainer = ({ toasts }: ToastContainerProps) => {
  return createPortal(
    <StyledToastList>
      {toasts.map(toast => (
        <Toast key={toast.id} id={toast.id} message={toast.message} />
      ))}
    </StyledToastList>,
    document.body
  );
};

const StyledToastList = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;
