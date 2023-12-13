import { colors } from '@/styles';
import type { Meta, StoryObj } from '@storybook/react';

import { Icon as IconComponent, ICON_TYPES } from '.';

type Icon = typeof IconComponent;

const meta: Meta<Icon> = {
  argTypes: {
    type: {
      control: 'select',
      options: [...Object.keys(ICON_TYPES)],
    },
    color: {
      control: 'select',
      options: [...Object.keys(colors)],
    },
  },
  component: IconComponent,
  title: 'Components/Icon',
};

export default meta;

export const Default: StoryObj<Icon> = {
  args: {
    color: 'white',
    size: 24,
    type: 'close',
  },
  render: args => <IconComponent {...args} />,
};
