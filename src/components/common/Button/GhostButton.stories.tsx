import { GhostButton as GhostButtonComponent } from '@chitchat/components';
import type { Meta, StoryObj } from '@storybook/react';

type GhostButton = typeof GhostButtonComponent;

const meta: Meta<GhostButton> = {
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
  component: GhostButtonComponent,
  title: 'Components/Common/GhostButton',
};

export default meta;

export const Default: StoryObj<GhostButton> = {
  args: {
    children: 'label',
    width: '358px',
  },
  render: args => <GhostButtonComponent {...args} />,
};
