import type { Meta, StoryObj } from '@storybook/react';

import { MainHeader as MainHeaderComponent } from './MainHeader';

type MainHeader = typeof MainHeaderComponent;

const meta: Meta<MainHeader> = {
  component: MainHeaderComponent,
  title: 'Components/MainHeader',
};

export default meta;

export const Default: StoryObj<MainHeader> = {
  render: () => <MainHeaderComponent />,
};
