// Globals
import type { Meta, StoryObj } from '@storybook/react';
// components
import Footer, { FooterDataProps } from 'components/authorable/Navigation/Footer/Footer';
// libs
import { expandObj, flattenObj } from 'lib/object-parser';
// mock
import { defaultData } from './Footer.mock';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Footer> = {
  title: 'Components/Authorable/Footer',
  component: Footer,
};

type Story = StoryObj<typeof Footer>;

export const FirstStory: Story = {
  args: flattenObj(defaultData),
  render: (props) => {
    return <Footer {...(expandObj({ ...props }) as unknown as FooterDataProps)} />;
  },
};

export default meta;
