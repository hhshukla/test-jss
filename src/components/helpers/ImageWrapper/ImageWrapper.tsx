// SEE: https://nextjs.org/docs/app/api-reference/components/image
// SEE: https://refine.dev/blog/using-next-image/#src

// Global
import { NextImage, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import Image, { ImageProps, StaticImageData } from 'next/image';

// Lib
import useExperienceEditor from 'lib/use-experience-editor';

/**
 * JSS does not yet support Next Image in Experience Editor
 * This component will switch between the two based on environment
 * which allows us to get the various performance benefits from Next Image
 *
 * Note that the images may display slightly differently in
 * Experience Editor as the JSS Image component doesn't have the same layout options
 */

export interface SizedImageField extends ImageField {
  value?: {
    alt?: string;
    height: number | `${number}`;
    src?: string;
    width: number | `${number}`;
  };
}

export interface ImageWrapperProps {
  className?: string;
  editable?: boolean;
  field?: SizedImageField | ImageField;
  layout?: NextImageLayoutOption;
  priority?: boolean;
  sizes?: string;
}

type NextImageLayoutOption = 'fill' | 'intrinsic' | 'responsive' | 'fixed';

const ImageWrapper = ({
  className,
  editable,
  field,
  layout = 'intrinsic',
  priority,
  sizes,
}: ImageWrapperProps): JSX.Element => {
  const { alt, height, width, src } = field?.value || {};
  const isEE = useExperienceEditor;

  // If running in Experience Editor, return <JSSImage /> component.
  if (isEE()) {
    return <NextImage field={{ ...field }} editable={editable} />;
  }

  const nextImageProps: ImageProps = {
    alt: (alt as string) || '',
    className: className,
    layout,
    priority,
    sizes,
    src: src as { default: StaticImageData } | string,
  };

  // // Remove layout and update with new usage based on NextImage in Next 13+
  // if (layout === 'responsive') {
  //   nextImageProps.sizes = '100vw';
  //   nextImageProps.style = {
  //     width: '100%',
  //     height: 'auto',
  //   };
  // }

  // if (layout === 'fill') {
  //   nextImageProps.fill = true;
  // }

  if (layout !== 'fill') {
    nextImageProps.height = height as number;
    nextImageProps.width = width as number;
  }

  // // for local development with webp images that are missing width property.
  // if (process.env.NODE_ENV === 'development' && !nextImageProps.width && !nextImageProps.layout)
  //   return <NextImage data-component="helpers/ImageWrapper/ImageWrapper" {...nextImageProps} />;

  return <Image data-component="helpers/ImageWrapper/ImageWrapper" {...nextImageProps} />;
};

export default ImageWrapper;
