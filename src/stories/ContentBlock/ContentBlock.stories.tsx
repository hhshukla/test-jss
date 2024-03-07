import type { Meta, StoryObj } from '@storybook/react';

import { defaultData } from './ContentBlock.mock';
import ContentBlock from 'components/authorable/ContentBlock/ContentBlock';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ContentBlock> = {
  title: 'Components/Authorable/ContentBlock',
  component: ContentBlock,
};

export default meta;
type Story = StoryObj<typeof ContentBlock>;

export const FirstStory: Story = {
  args: defaultData,
};
