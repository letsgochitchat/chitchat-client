import { useToast } from '@/hooks/common/useToast';
import type { Meta, StoryObj } from '@storybook/react';

import { Toast as ToastComponent } from './Toast';

type Toast = typeof ToastComponent;

const meta: Meta<Toast> = {
  component: ToastComponent,
  title: 'Components/Toast',
};

export default meta;

export const Default: StoryObj<Toast> = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { addToast } = useToast();

    // eslint-disable-next-line react/button-has-type
    return <button onClick={() => addToast('제발')}>클릭</button>;
  },
};
