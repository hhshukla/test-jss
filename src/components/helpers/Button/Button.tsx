import { tv, type VariantProps } from 'tailwind-variants';
import LinkWrapper, { LinkWrapperProps } from '../LinkWrapper/LinkWrapper';

/**
 * There are 3 tyep od button variants
 * - button with fill background
 * - button with transprent background with border
 * - button with transprent background without border
 */

//--- Style Defination
const button = tv({
  base: 'font-semibold text-4 leading-[1em] rounded-full active:opacity-80 py-5 px-9',
  variants: {
    type: {
      filled: 'bg-primary-blue text-primary-white border border-transparent',
      outlined: 'bg-primary-white text-primary-blue border border-primary-blue',
      clean: 'text-primary-blue border border-transparent',
    },
  },
});

//--- style variants props
type tvProps = VariantProps<typeof button>;

//--- Type Definations
export type buttonProps = tvProps & LinkWrapperProps;

const Button = ({ field, type }: buttonProps) => {
  return <LinkWrapper className={button({ type })} field={field} />;
};

export default Button;
