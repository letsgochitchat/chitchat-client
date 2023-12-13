import type { Meta, StoryObj } from '@storybook/react';

import { ChattingInput as ChattingInputComponent } from './ChattingInput';

type ChattingInput = typeof ChattingInputComponent;

const meta: Meta<ChattingInput> = {
  component: ChattingInputComponent,
  title: 'Components/ChattingInput',
};

export default meta;

export const Default: StoryObj<ChattingInput> = {
  args: {
    isChatAlive: true,
    value: '',
  },
  render: args => <ChattingInputComponent {...args} />,
};
