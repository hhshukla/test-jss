import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

export type HeaderType = Partial<ComponentProps> & {
  uid?: string;
  componentName?: string;
  dataSource?: string;
  fields: {
    NavigationLinks: Array<navigationLinkType>;
    Image?: ImageField;
    LogoURL?: LinkField;
    SearchLogo?: ImageField;
    SearchText?: Field<string>;
    PlayStoreImage?: ImageField;
    PlayStoreUrl?: LinkField;
    IOSUrl?: LinkField;
    IOSImage?: ImageField;
    MobileAppStoreImage?: ImageField;
    MobilePlayStoreImage?: ImageField;
    LanguageList?: Array<langaugeFieldsType>;
    PollutantBlockTitle?: Field<string>;
    PollutantBlockDataMapping?: Field<string>;
    HealthTipsDataMapping?: Field<string>;
    HealthTipsTitle?: Field<string>;
  };
};

export type navigationLinkType = itemFields & {
  fields: {
    SecondaryNavigation?: secondaryNavigationType[];
    IsLink?: Field<boolean>;
    LinkTitle?: Field<string>;
    LinkURL?: LinkField;
  };
};

export type secondaryNavigationType = itemFields & {
  ShowInHeader?: Field<boolean>;
  NavigationTitle?: Field<string>;
  NavigationIcon?: ImageField;
  PageDescription?: Field<string>;
  [key: string]: unknown | ImageField | Field<string | boolean> | undefined;
};
export type langaugeFieldsType = itemFields & {
  Iso?: Field<string>;
  [key: string]: unknown | Field<string> | undefined;
};

export type itemFields = {
  id?: string;
  url?: string;
  name?: string;
  displayName?: string;
};
