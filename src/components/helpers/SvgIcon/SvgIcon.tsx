import dynamic from 'next/dynamic';
import React, { memo } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

export type IconTypes =
  | 'arrow-forward'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-down'
  | 'arrow-download'
  | 'arrow-up'
  | 'search'
  | 'new-tab'
  | 'play-store'
  | 'facebook'
  | 'instagram'
  | 'linkedin'
  | 'wechat'
  | 'menu'
  | 'close'
  | 'share'
  | '01d'
  | undefined;

export interface SvgIconProps {
  className?: string;
  icon: IconTypes;
  defs?: JSX.Element;
  fillId?: string;
  size: svgIconVariant['size'];
}

export interface IconProps {
  fillId?: string;
  size?: string;
}

// const variants: Record<Sizes, string> = {
//   sm: clsx('h-2.5', 'w-2.5'),
//   md: clsx('h-3', 'w-3'),
//   lg: clsx('h-4', 'w-4'),
//   xl: clsx('h-6', 'w-6'),
//   full: clsx('h-full', 'w-full'),
// };

const svgClass = tv({
  base: ['svg-icon', 'align-middle', 'inline-flex', 'origin-center', 'transition-inherit'],
  variants: {
    size: {
      sm: ['h-4', 'w-4'],
      md: ['h-5', 'w-5'],
      lg: ['h-11', 'w-11'],
    },
  },
});

type svgIconVariant = VariantProps<typeof svgClass>;

const SvgIcon = ({ icon, className, defs, fillId, size }: SvgIconProps): JSX.Element => {
  const IconContent = dynamic(() => import(`./icons/icon--${icon}`));

  const props: IconProps = {
    fillId: fillId,
  };

  return (
    <span className={svgClass({ size, className: className })}>
      <IconContent {...props}>{!!defs && defs}</IconContent>
    </span>
  );
};

export default memo(SvgIcon);
