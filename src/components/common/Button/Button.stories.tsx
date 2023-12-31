import type { Meta, StoryObj } from '@storybook/react';

import { Button as ButtonComponent } from './Button';

type Button = typeof ButtonComponent;

const meta: Meta<Button> = {
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  component: ButtonComponent,
  title: 'Components/Button',
};

export default meta;

export const Default: StoryObj<Button> = {
  args: {
    children: 'label',
    width: '358px',
  },
  render: args => <ButtonComponent {...args} />,
};
