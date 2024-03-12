// Global
import dynamic from 'next/dynamic';
import { memo } from 'react';
//  Icon contents should be stored in the icons subdirectory using the naming scheme 'icon--[name].tsx'
import clsx from 'clsx';

export type IconTypes =
  | 'arrow-forward'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-down'
  | 'arrow-download'
  | 'arrow-up'
  | 'new-tab'
  | 'play'
  | 'facebook'
  | 'instagram'
  | 'linkedin'
  | 'wechat'
  | 'menu'
  | 'close'
  | 'share'
  | 'copy'
  | undefined;

export interface SvgIconProps {
  className?: string;
  icon: IconTypes;
  defs?: JSX.Element;
  fillId?: string;
  size?: Sizes;
}

export interface IconProps {
  fillId?: string;
  size?: string;
}

type Sizes = 'sm' | 'md' | 'lg' | 'xl' | 'full';

const SvgIconClasses = clsx(
  'svg-icon',
  'align-middle',
  'inline-flex',
  'origin-center',
  'transition-inherit'
);

const variants: Record<Sizes, string> = {
  sm: clsx('h-2.5', 'w-2.5'),
  md: clsx('h-3', 'w-3'),
  lg: clsx('h-4', 'w-4'),
  xl: clsx('h-6', 'w-6'),
  full: clsx('h-full', 'w-full'),
};

const SvgIcon = ({ icon, className, defs, fillId, size = 'md' }: SvgIconProps): JSX.Element => {
  const IconContent = dynamic(() => import(`./icons/icon--${icon}`));

  const props: IconProps = {
    fillId: fillId,
  };

  return (
    <span className={clsx(SvgIconClasses, variants[size], className)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <IconContent {...props}>{!!defs && defs}</IconContent>
      </svg>
    </span>
  );
};

export default memo(SvgIcon);
