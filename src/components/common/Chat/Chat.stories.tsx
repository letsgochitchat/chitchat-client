import type { Meta, StoryObj } from '@storybook/react';

import { Chat as ChatComponent } from './index';

type Chat = typeof ChatComponent;

const meta: Meta<Chat> = {
  component: ChatComponent,
  title: 'Components/Chat',
};

export default meta;

export const Default: StoryObj<Chat> = {
  args: {
    isMine: true,
    nickname: '멋쟁이사자처럼',
    message: 'Lorem Ipsum dolar',
  },
  render: args => <ChatComponent {...args} />,
};
