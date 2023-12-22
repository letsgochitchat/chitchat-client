import type { Meta, StoryObj } from '@storybook/react';

import { Toast as ToastComponent } from '.';

type Toast = typeof ToastComponent;

const meta: Meta<Toast> = {
  argTypes: {
    message: {
      control: { type: 'text' },
    },
  },
  component: ToastComponent,
  title: 'Components/Toast',
};

export default meta;

export const Default: StoryObj<Toast> = {
  args: {
    message: '로그인 성공',
  },
  render: args => <ToastComponent {...args} />,
};
