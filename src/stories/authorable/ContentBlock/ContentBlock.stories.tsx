// Globals
import type { Meta, StoryObj } from '@storybook/react';
// components
import ContentBlock, { ContentBlockProps } from 'components/authorable/ContentBlock/ContentBlock';
// libs
import { expandObj, flattenObj } from 'lib/object-parser';
// mock
import { defaultData } from './ContentBlock.mock';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ContentBlock> = {
  title: 'Components/Authorable/ContentBlock',
  component: ContentBlock,
};

type Story = StoryObj<typeof ContentBlock>;

export const FirstStory: Story = {
  args: flattenObj(defaultData),
  render: (props) => {
    return <ContentBlock {...(expandObj({ ...props }) as ContentBlockProps)} />;
  },
};

export default meta;
