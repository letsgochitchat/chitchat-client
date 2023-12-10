import { Button as ButtonComponent } from '@chitchat/components';
import type { Meta, StoryObj } from '@storybook/react';

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
  title: 'Components/Common/Button',
};

export default meta;

export const Default: StoryObj<Button> = {
  args: {
    children: 'label',
    width: '358px',
  },
  render: args => <ButtonComponent {...args} />,
};
