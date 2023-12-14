import type { Meta, StoryObj } from '@storybook/react';

import { Header as HeaderComponent } from './Header';

type Header = typeof HeaderComponent;

const meta: Meta<Header> = {
  argTypes: {
    title: {
      control: 'text',
    },
  },
  component: HeaderComponent,
  title: 'Components/Header',
};

export default meta;

export const Default: StoryObj<Header> = {
  args: {
    title: '제목',
    onClose: () => alert('닫기!'),
    onBack: () => alert('뒤로가기!'),
  },
  render: args => <HeaderComponent {...args} />,
};
