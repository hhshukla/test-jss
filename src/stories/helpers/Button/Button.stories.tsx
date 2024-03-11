import type { Meta, StoryObj } from '@storybook/react';
import Button from 'components/helpers/Button/Button';
import { cleanData, filledData, outlinedData } from './Button.mock';

//👇 This default export determines where your story goes in the story list

const meta: Meta<typeof Button> = {
  title: 'Components/Helpers/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ padding: '1em' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const FillButton: Story = {
  args: filledData,
};

export const OutlineButton: Story = {
  args: outlinedData,
};
export const CleanButton: Story = {
  args: cleanData,
};
