import type { Meta, StoryObj } from '@storybook/react';

import { Header as HeaderComponent } from './Header';

type Header = typeof HeaderComponent;

const meta: Meta<Header> = {
  component: HeaderComponent,
  title: 'Components/Header',
};

export default meta;

export const Default: StoryObj<Header> = {
  render: () => <HeaderComponent />,
};
