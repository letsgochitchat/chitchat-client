import type { Meta, StoryObj } from '@storybook/react';

import { Input as InputComponent } from '.';

type Input = typeof InputComponent;

const meta: Meta<Input> = {
  component: InputComponent,
  title: 'Components/Input',
};

export default meta;

export const Default: StoryObj<Input> = {
  args: {
    guideMessage: '입력해야 할 정보가 무엇인지 적어주세요',
    label: '인풋 라벨',
    placeholder: '플레이스 홀더',
    width: '358px',
  },
  render: args => <InputComponent {...args} />,
};
