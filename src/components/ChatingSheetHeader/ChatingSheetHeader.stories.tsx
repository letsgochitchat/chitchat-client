import type { Meta, StoryObj } from '@storybook/react';

import { ChatingSheetHeader as ChatingSheetHeaderComponent } from '.';

type ChatingSheetHeader = typeof ChatingSheetHeaderComponent;

const meta: Meta<ChatingSheetHeader> = {
  argTypes: {
    title: {
      control: 'text',
    },
    userOfNumber: {
      control: 'number',
    },
  },
  component: ChatingSheetHeaderComponent,
  title: 'Components/ChatingSheetHeader',
};

export default meta;

export const Default: StoryObj<ChatingSheetHeader> = {
  args: {
    title: '요즘 맨유 맨날 져서 감스트 리액션 보는 맛으로 사는 맹구면 개추 ㅋㅋㅋ',
    userOfNumber: 8,
  },
  render: args => <ChatingSheetHeaderComponent {...args} />,
};
