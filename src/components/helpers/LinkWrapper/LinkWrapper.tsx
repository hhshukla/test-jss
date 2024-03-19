// Global
import { Link, LinkField, LinkFieldValue } from '@sitecore-jss/sitecore-jss-nextjs';
import { LinkProps } from '@sitecore-jss/sitecore-jss-react';
// import NextLink from 'next/link';
import React from 'react';

// Lib
import useExperienceEditor from 'lib/use-experience-editor';

/**
 * This component adds some needed accessibility updates to the JSS Link component
 */

export type LinkWrapperProps = Omit<LinkProps, 'field'> & {
  className?: string;
  field?: LinkField | LinkFieldValue;
  srOnlyText?: string;
  suppressLinkText?: boolean;
  suppressNewTabIcon?: boolean;
  ignoreEE?: boolean;
};

const INTERNAL_LINK_REGEX = /^\/|^\#/g;

const LinkWrapper = React.forwardRef(
  (
    {
      children,
      className,
      field,
      ref,
      srOnlyText,
      suppressLinkText,
      suppressNewTabIcon,
      ignoreEE,
      showLinkTextWithChildrenPresent = true,
      ...props
    }: LinkWrapperProps,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _ref
  ): JSX.Element => {
    const isEE = useExperienceEditor();

    if (!field) return <></>;

    // Format field as LinkField for consistency
    const asLinkField = !field.value ? { value: { ...field } } : (field as LinkField);
    const text = suppressLinkText ? '' : asLinkField?.value?.text;
    const target = asLinkField?.value?.target;

    const value = asLinkField.value;

    if (value.href?.startsWith('/')) {
      // Force lowercase links for internal urls
      value.href = value.href?.toLocaleLowerCase();
    }
    // const { href, querystring, anchor } = value;

    // console.log('className :', className);

    // In experience editor, do not pass any children but retain basic styling so that double components do not appear when using <Link>
    if (isEE && !ignoreEE) {
      return (
        <Link
          className={className}
          field={asLinkField}
          internalLinkMatcher={INTERNAL_LINK_REGEX}
          ref={typeof ref !== 'string' ? ref : null}
          showLinkTextWithChildrenPresent={showLinkTextWithChildrenPresent}
          {...props}
        />
      );
    }

    // console.log('Link Wrapper value:', value, props);
    // If no content is present, don't print
    if (
      !suppressLinkText &&
      !asLinkField.value.text &&
      !asLinkField.value.href &&
      !asLinkField.value.anchor
    )
      return <></>;

    return (
      <Link
        className={className}
        field={asLinkField}
        showLinkTextWithChildrenPresent={false}
        internalLinkMatcher={INTERNAL_LINK_REGEX}
        aria-label={props['aria-label'] ? props['aria-label'] : text}
        data-component="helpers/a11y/linkwrapper"
        // href={{ pathname: href, query: querystring, hash: anchor }}
        key="link"
        // Sitecore's Link field explicitly strips out the locale.  We want to keep it.
        // locale={false}=
        ref={typeof ref !== 'string' ? ref : null}
        {...props}
      >
        <>
          {/* {showLinkTextWithChildrenPresent && text ? (
            <div dangerouslySetInnerHTML={{ __html: text }} />
          ) : null} */}
          {text}
          {children}
          {(target === '_blank' || srOnlyText) && (
            <>
              <span className="sr-only">
                {srOnlyText && srOnlyText}
                {/* Preserve a single space character before SR Tab Text */}
                {target === '_blank' && ' (Opens in a new tab)'}
              </span>
              {/* Icon Goes Here */}
              {!suppressNewTabIcon && target === '_blank' && <span></span>}
            </>
          )}
        </>
      </Link>
    );
  }
);

LinkWrapper.displayName = 'LinkWrapper';

export default LinkWrapper;

{
  /* <NextLink
        title={value.title}
        target={value.target}
        className={className}
        aria-label={props['aria-label'] ? props['aria-label'] : text}
        data-component="helpers/a11y/linkwrapper"
        href={{ pathname: href, query: querystring, hash: anchor }}
        key="link"
        // Sitecore's Link field explicitly strips out the locale.  We want to keep it.
        // locale={false}=
        ref={typeof ref !== 'string' ? ref : null}
        {...props}
      >
        <>
          {showLinkTextWithChildrenPresent && text ? (
            <div dangerouslySetInnerHTML={{ __html: text }} />
          ) : null}
          {children}
          {(target === '_blank' || srOnlyText) && (
            <>
              <span className="sr-only">
                {srOnlyText && srOnlyText}
                Preserve a single space character before SR Tab Text
                {target === '_blank' && ' (Opens in a new tab)'}
              </span>
              Icon Goes Here
              {!suppressNewTabIcon && target === '_blank' && <span></span>}
            </>
          )}
        </>
      </NextLink> */
}
