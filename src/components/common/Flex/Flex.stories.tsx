import type { Meta, StoryObj } from '@storybook/react';

import { Flex as FlexComponent } from '.';

type Flex = typeof FlexComponent;

const meta: Meta<Flex> = {
  argTypes: {
    align: {
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
    },
    justify: {
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
    },
    wrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
    },
    direction: {
      control: 'select',
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
    },
    basis: {
      control: 'text',
    },
    grow: {
      control: 'number',
    },
    shrink: {
      control: 'number',
    },
  },
  component: FlexComponent,
  title: 'Components/Flex',
};

export default meta;

export const Default: StoryObj<Flex> = {
  render: args => (
    <FlexComponent {...args}>
      <div style={{ width: '80px', height: '80px', backgroundColor: 'red' }} />
      <div style={{ width: '80px', height: '80px', backgroundColor: 'green' }} />
      <div style={{ width: '80px', height: '80px', backgroundColor: 'blue' }} />
    </FlexComponent>
  ),
};
