import type { Meta, StoryObj } from '@storybook/react';

import StyleGuide from './StyleGuide';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof StyleGuide> = {
  title: 'Components/Authorable/StyleGuide',
  component: StyleGuide,
};

export default meta;
type Story = StoryObj<typeof StyleGuide>;

export const BreatheFreeColors: Story = {
  args: {
    type: 'color',
  },
};

export const BreatheFreeTypography: Story = {
  args: {
    type: 'typography',
  },
};
