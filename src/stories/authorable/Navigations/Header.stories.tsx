// Globals
import type { Meta, StoryObj } from '@storybook/react';
// components
import Header, { HeaderProps } from 'components/authorable/Navigations/Header/Header';
// libs
import { expandObj, flattenObj } from 'lib/object-parser';
// mock
import { defaultData } from './Header.mock';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Header> = {
  title: 'Components/Authorable/Navigations/Header',
  component: Header,
};

type Story = StoryObj<typeof Header>;

export const FirstStory: Story = {
  args: flattenObj(defaultData),
  render: (props) => {
    return <Header {...(expandObj({ ...props }) as HeaderProps)} />;
  },
};

export default meta;
