import { ContentBlockProps } from '@/components/authorable/ContentBlock/ContentBlock';

export const defaultData: ContentBlockProps = {
  rendering: { componentName: 'ApartmentFloorPlan' },
  params: {},
  fields: {
    heading: {
      value: 'Hello world',
    },
    content: {
      value: 'This is content',
    },
  },
};
