import type { Meta, StoryObj } from '@storybook/react';

import KitchenSink from 'components/authorable/KitchenSink/KitchenSink';
import { defaultData } from './KitchenSink.mock';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof KitchenSink> = {
  title: 'Components/Authorable/KitchenSink',
  component: KitchenSink,
};

export default meta;
type Story = StoryObj<typeof KitchenSink>;

export const FirstStory: Story = {
  args: defaultData,
};
