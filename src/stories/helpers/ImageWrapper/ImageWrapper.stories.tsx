// Globals
import type { Meta, StoryObj } from '@storybook/react';
// components
import ImageWrapper, { ImageWrapperProps } from 'components/helpers/ImageWrapper/ImageWrapper';
// libs
import { expandObj, flattenObj } from 'lib/object-parser';
// mock
import { defaultData } from './ImageWrapper.mock';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ImageWrapper> = {
  title: 'Components/Authorable/ImageWrapper',
  component: ImageWrapper,
};

type Story = StoryObj<typeof ImageWrapper>;

export const Image: Story = {
  args: flattenObj(defaultData),
  render: (props) => {
    return <ImageWrapper {...(expandObj({ ...props }) as ImageWrapperProps)} />;
  },
};

export default meta;
