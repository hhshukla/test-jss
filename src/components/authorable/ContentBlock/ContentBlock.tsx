import React from 'react';
import { Text, RichText, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

export type ContentBlockProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    content: Field<string>;
  };
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const ContentBlock = ({ fields }: ContentBlockProps): JSX.Element => {
  // console.log(fields);
  if (!fields) {
    return <></>;
  }

  return (
    <div className="contentBlock">
      <Text tag="h2" className="contentTitle" field={fields.heading} />

      <RichText className="contentDescription" field={fields.content} />
    </div>
  );
};

export default ContentBlock;
// export default withDatasourceCheck()<ContentBlockProps>(ContentBlock);
