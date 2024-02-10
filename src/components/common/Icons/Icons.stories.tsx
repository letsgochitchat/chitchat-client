import { type SVGProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import {
  AddIcon,
  ArrowBackIcon,
  CameraIcon,
  CloseIcon,
  MenuIcon,
  PeopleIcon,
  ToastErrorIcon,
  ToastSuccessIcon,
} from '.';

type Icon = SVGProps<SVGSVGElement>;

const meta: Meta<Icon> = {
  argTypes: {
    width: {
      control: 'number',
    },
    height: {
      control: 'number',
    },
  },
  title: 'Components/Icons',
};

export default meta;

export const Add: StoryObj<Icon> = {
  args: {
    width: 24,
    height: 24,
  },
  render: args => <AddIcon {...args} />,
};

export const ArrowBack: StoryObj<Icon> = {
  args: {
    width: 24,
    height: 24,
  },
  render: args => <ArrowBackIcon {...args} />,
};

export const Camera: StoryObj<Icon> = {
  args: {
    width: 24,
    height: 24,
  },
  render: args => <CameraIcon {...args} />,
};

export const ToastError: StoryObj<Icon> = {
  args: {
    width: 24,
    height: 24,
  },
  render: args => <ToastErrorIcon {...args} />,
};

export const ToastSuccess: StoryObj<Icon> = {
  args: {
    width: 24,
    height: 24,
  },
  render: args => <ToastSuccessIcon {...args} />,
};

export const Close: StoryObj<Icon> = {
  args: {
    width: 24,
    height: 24,
  },
  render: args => <CloseIcon {...args} />,
};

export const Menu: StoryObj<Icon> = {
  args: {
    width: 24,
    height: 24,
  },
  render: args => <MenuIcon {...args} />,
};

export const People: StoryObj<Icon> = {
  args: {
    width: 24,
    height: 24,
  },
  render: args => <PeopleIcon {...args} />,
};
