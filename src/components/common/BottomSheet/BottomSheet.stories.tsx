import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { BottomSheet as BottomSheetComponent } from '.';

type BottomSheet = typeof BottomSheetComponent;

const meta: Meta<BottomSheet> = {
  component: BottomSheetComponent,
  title: 'Components/BottomSheet',
};

export default meta;

export const Default: StoryObj<BottomSheet> = {
  args: {
    isShowing: false,
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isShowing, setIsShowing] = useState(false);

    return (
      <>
        <BottomSheetComponent
          {...args}
          isShowing={isShowing}
          onClickOutside={() => setIsShowing(false)}
        />
        <button
          type="button"
          onClick={() => {
            setIsShowing(true);
          }}
          style={{ color: 'white' }}
        >
          Open!
        </button>
      </>
    );
  },
};
