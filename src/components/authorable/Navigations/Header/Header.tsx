// Global
import React from 'react';
import { tv } from 'tailwind-variants';
import clsx from 'clsx';
import { Text } from '@sitecore-jss/sitecore-jss-react';
// Custom
import { ComponentProps } from 'lib/component-props';
import ImageWrapper from 'components/helpers/ImageWrapper/ImageWrapper';
import SvgIcon from 'components/helpers/SvgIcon/SvgIcon';
import LinkWrapper from 'components/helpers/LinkWrapper/LinkWrapper';
// Mock Data
// import { defaultData } from '@/stories/authorable/Navigations/Header.mock';
import { HeaderType } from './Header.type';

//--- Type defination
export type HeaderProps = ComponentProps & HeaderType;

const header = tv(
  {
    slots: {
      container: ['bg-primary-white', 'border-b', 'border-primary-gray-tint-200'],
      headerWrapper: ['justify-between'],
      featureWrapper: ['grow', 'justify-end', 'gap-5 lg:gap-10'],

      logo: [''],
      aqibox: '',
      langaugeDropdown: ['hidden md:flex'],
      appStoreIcon: ['hidden md:flex gap-5'],
      search: [''],
      menuIcon: [''],

      primaryWrapper: [],
      primaryText: ['font-semibold', 'border-b', 'border-primary-gray-tint-400', 'group'],
      listingPageLink: ['text-primary-blue', 'gap-1.5'],
      secondaryWrapper: [''],
      secondaryNavbar: [''],
      secondaryNavItem: ['flex', 'bg-primary-white', 'rounded-[15px]', 'gap-3'],

      // Common slots
      link: ['text-primary-less-black', 'cursor-pointer'],
      flexItemsCenter: ['flex', 'items-center'],
      maxContainer: ['lg:container', 'lg:mx-auto'],
      lightParagraph: ['font-light', 'text-secondary-gray-dark', 'text-3', 'leading-4.5'],
      // navigationTexts: ['font-semibold', 'leading-5.5', 'text-3.5'],
      rotateIcon: ['hover:rotate-180', 'group'],
    },
    variants: {
      device: {
        mobile: {
          headerWrapper: ['py-4', 'px-6'],
          aqibox: ['hidden'],

          logo: ['relative', 'w-[146px]', 'h-10'],
          primaryWrapper: ['flex-col', 'hidden'],
          primaryText: ['w-full', 'text-3.5', 'px-6', 'py-4', 'hover:text-primary-blue'],
          listingPageLink: ['px-5.5', 'pb-4', 'font-regular', 'leading-5'],
          secondaryWrapper: ['bg-primary-gray-tint-400', 'w-full', 'px-6', 'gap-2.5'],
          secondaryNavbar: ['flex', 'flex-col', 'gap-5', 'pb-7.5'],
          secondaryNavItem: ['font-regular', 'py-2.5', 'px-5', 'items-center', 'w-full'],
          mobileLangaugeDropdown: [''],

          link: ['hover:text-primary-blue'],
          menuIcon: ['block'],
          search: ['w-10', 'h-10'],
          lightParagraph: ['hidden'],
          // navigationTexts: ['text-3.5', 'leading-5.5', 'w-full'],
        },
        tablet: {
          headerWrapper: ['py-[27px]', 'px-0'],
          aqibox: ['flex', 'border-2', 'rounded-4', 'py-4.5', 'px-6', 'gap-1.5'],

          logo: 'h-[65px] w-[236px]',
          primaryWrapper: ['justify-between', 'flex-row', 'flex', 'px-2', 'gap-10'],
          primaryText: [
            'w-fit',
            'px-0',
            'py-7.5',
            'gap-2.5',
            'border-0',
            '!text-primary-white',
            'leading-5.5',
          ],
          listingPageLink: ['py-7', 'border-b', 'border-primary-blue-tint-100', 'px-0'],
          secondaryWrapper: ['bg-primary-blue-tint-400', 'absolute', 'top-full', 'left-0', 'gap-6'],
          secondaryNavbar: ['flex-row', 'pt-7.5', 'pb-17', 'gap-7.5'],
          secondaryNavItem: ['p-4.5', 'basis-1/4', 'items-start'],
          mobileLangaugeDropdown: ['hidden'],

          link: ['hover:!text-primary-less-black'],
          menuIcon: ['hidden'],
          search: ['w-5.5', 'h-5.5'],
          lightParagraph: 'block',
          // navigationTexts: ['text-5.5', 'w-fit'],
        },
      },
    },
  },
  { responsiveVariants: ['md'] }
);

const Header = ({ fields }: HeaderProps) => {
  //--- Slots Extraction
  const {
    container,
    headerWrapper,
    logo,
    aqibox,
    featureWrapper,
    appStoreIcon,
    langaugeDropdown,
    search,
    menuIcon,

    primaryWrapper,
    primaryText,
    listingPageLink,
    secondaryWrapper,
    secondaryNavbar,
    secondaryNavItem,

    link,
    maxContainer,
    flexItemsCenter,
    lightParagraph,
    // navigationTexts,
    // rotateIcon,
  } = header({ device: { initial: 'mobile', md: 'tablet' } });

  console.log('Header || fields:', fields);
  const defaultLangauge =
    fields.LanguageList && fields.LanguageList.length > 0 && fields?.LanguageList[0].displayName
      ? fields?.LanguageList[0].displayName
      : 'en';

  //--- State
  const [selectedNavItem, setSelectedNavItem] = React.useState<string | null>(null);
  const [currentLanguage] = React.useState<string>(defaultLangauge); // @todo Need to Create hook for set and get language base on url
  const [isLangaugePopUpOpen, setIsLangaugePopUpOpen] = React.useState<boolean>(false);
  const [isPrimaryNavVisible, setIsPrimaryNavVisible] = React.useState<boolean>(false); //  this will in mobile drop down

  //--- Refs
  const navigationRef = React.useRef<HTMLDivElement | null>(null);

  //--- Handlers
  const handlePrimaryNavVisible = () => {
    setIsPrimaryNavVisible((prev) => !prev);
  };
  const handleDropDownOpen = (navId: string, hasChildren?: boolean) => {
    if (!hasChildren) {
      setSelectedNavItem(null);
      return;
    }
    if (selectedNavItem && selectedNavItem === navId) {
      setSelectedNavItem(null);
    } else {
      setSelectedNavItem(navId);
    }
  };

  //--- useEffect
  React.useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (navigationRef.current && !navigationRef.current.contains(e.target as Node)) {
        console.log('out side click');
        setIsPrimaryNavVisible(false);
        setSelectedNavItem(null);
      }
    };

    document.addEventListener('click', handleOutsideClick, true);
    return () => {
      document.removeEventListener('click', handleOutsideClick, true);
    };
  }, []);

  if (!fields) return <></>;

  const FeatureHeader = () => (
    <div className={clsx(maxContainer(), flexItemsCenter(), headerWrapper())}>
      <div className={logo()}>
        <ImageWrapper field={fields?.Image} layout="fill" />
      </div>
      <div className={clsx(flexItemsCenter(), featureWrapper())}>
        <div className={clsx(flexItemsCenter(), aqibox())}>
          <h3 className={clsx('md:text-7 lg:text-[42px] text-primary-blue font-semibold')}>
            AQI 203
          </h3>
          <div className={flexItemsCenter({ className: 'gap-5' })}>
            <div>
              <p className={clsx('text-3 font-regular lg:mb-1')}>Vadodara</p>
              <p
                className={flexItemsCenter({
                  className: 'text-4 lg:text-5 font-medium leading-7.5 gap-4',
                })}
              >
                32 <SvgIcon icon="01d" size="md" />
              </p>
            </div>
            <SvgIcon icon="arrow-forward" size="sm" />
          </div>
        </div>
        <div className={clsx(flexItemsCenter(), appStoreIcon())}>
          <SvgIcon icon="play-store" size="lg" />
          <SvgIcon icon="play-store" size="lg" />
        </div>
        <div className={langaugeDropdown()}>
          <div onClick={() => setIsLangaugePopUpOpen((prev) => !prev)}>
            {currentLanguage}
            <SvgIcon icon="arrow-down" size="lg" className="w-fit h-fit" />
          </div>
          {isLangaugePopUpOpen && (
            <ul>
              {fields.LanguageList &&
                fields.LanguageList?.length > 0 &&
                fields.LanguageList.map((langauge) => (
                  <li key={langauge.displayName}>{langauge.displayName}</li>
                ))}
            </ul>
          )}
        </div>
        <SvgIcon icon="search" size="md" className={search()} />
        <div className={menuIcon()} onClick={handlePrimaryNavVisible}>
          <SvgIcon icon={isPrimaryNavVisible ? 'close' : 'menu'} size="md" />
        </div>
      </div>
    </div>
  );

  const Navbar = () => (
    <nav className={clsx('relative', 'md:bg-primary-green')} ref={navigationRef}>
      {/* --- Primary Navigation --- */}
      <ul
        className={clsx(
          flexItemsCenter({ className: 'items-start' }),
          maxContainer(),
          primaryWrapper({ className: clsx({ flex: isPrimaryNavVisible }) })
        )}
      >
        {fields.NavigationLinks.map((primaryNav, idx) => {
          return (
            <React.Fragment key={'primary nav ' + idx}>
              <li
                onClick={() =>
                  handleDropDownOpen(
                    primaryNav.id ?? 'primary-nav-' + idx,
                    primaryNav?.fields?.SecondaryNavigation &&
                      primaryNav?.fields?.SecondaryNavigation.length > 0
                  )
                }
                className={clsx(
                  flexItemsCenter(),
                  link(),
                  primaryText({
                    className: clsx({
                      'bg-primary-gray-tint-400 md:bg-primary-green !text-primary-blue md:!text-primary-less-black':
                        primaryNav.id === selectedNavItem,
                    }),
                  })
                )}
              >
                {primaryNav?.fields?.IsLink?.value &&
                primaryNav?.fields?.SecondaryNavigation &&
                primaryNav.fields.SecondaryNavigation.length <= 0 ? (
                  <LinkWrapper
                    field={primaryNav.fields.LinkURL}
                    className={clsx('w-full md:w-fit text-3.5 md:text-4.5 lg:text-5.5')}
                  >
                    {primaryNav.name}
                  </LinkWrapper>
                ) : (
                  <p className={clsx('w-full md:w-fit text-3.5 md:text-4.5 lg:text-5.5')}>
                    {primaryNav.name}
                  </p>
                )}
                {primaryNav?.fields?.SecondaryNavigation &&
                  primaryNav.fields.SecondaryNavigation.length > 0 && (
                    <SvgIcon icon="arrow-down" size="lg" className="w-fit h-fit" />
                  )}
              </li>
              {/* --- Secondary Navigation --- */}
              <div
                className={clsx(secondaryWrapper(), {
                  hidden: selectedNavItem !== primaryNav.id,
                })}
              >
                <LinkWrapper
                  field={primaryNav.fields.LinkURL}
                  className={clsx(flexItemsCenter(), maxContainer(), listingPageLink())}
                >
                  <Text field={primaryNav.fields.LinkTitle} tag="p" />
                  <SvgIcon icon="arrow-forward" size="sm" />
                </LinkWrapper>
                <div className={clsx(maxContainer(), secondaryNavbar())}>
                  {primaryNav?.fields?.SecondaryNavigation &&
                    primaryNav.fields.SecondaryNavigation.map((secondaryNav, idx) => (
                      <LinkWrapper
                        field={{ value: { href: secondaryNav.url } }}
                        key={'secondary nav' + idx}
                        className={secondaryNavItem()}
                      >
                        <>
                          {/* <div className={flexItemsCenter({ className: 'gap-3 item' })}> */}
                          <div className="relative min-h-7 min-w-7 ">
                            {secondaryNav.NavigationIcon && (
                              <ImageWrapper field={secondaryNav.NavigationIcon} layout="fill" />
                            )}
                          </div>
                          <div>
                            <Text field={secondaryNav?.NavigationTitle} tag="p" />
                            <Text
                              field={secondaryNav?.PageDescription}
                              tag="p"
                              className={lightParagraph()}
                            />
                            {/* </div> */}
                          </div>
                        </>
                      </LinkWrapper>
                    ))}
                </div>
              </div>
              {/* --- Secondary Navigation END --- */}
            </React.Fragment>
          );
        })}
        <MobileFeature />
      </ul>
    </nav>
  );

  const MobileFeature = () => {
    const mockLangaugeId = '{lang-id}';
    return (
      <React.Fragment>
        <div
          className={clsx(
            flexItemsCenter(),
            primaryText({
              className: clsx(
                {
                  'bg-primary-gray-tint-400': selectedNavItem === mockLangaugeId,
                },
                '!font-regular !text-secondary-gray-dark md:hidden'
              ),
            })
          )}
          onClick={() => handleDropDownOpen(mockLangaugeId, true)}
        >
          <p className="w-full text-3.5">{currentLanguage}</p>
          <SvgIcon icon="arrow-down" size="lg" className="w-fit h-fit" />
        </div>
        {selectedNavItem === mockLangaugeId && (
          <div className={clsx(secondaryWrapper({ className: 'flex flex-wrap gap-5 pb-7.5' }))}>
            {fields.LanguageList &&
              fields.LanguageList.map((lang) => (
                <>
                  <div
                    key={'lanauge-' + lang.name}
                    className={secondaryNavItem({ className: 'w-[45%] min-w-min' })}
                  >
                    <p>{lang.name}</p>
                  </div>
                  <div
                    key={'lanauge-' + lang.name}
                    className={secondaryNavItem({ className: 'w-[45%] min-w-min' })}
                  >
                    <p>{lang.name}</p>
                  </div>
                </>
              ))}
          </div>
        )}
      </React.Fragment>
    );
  };

  return (
    <>
      <div className={container()}>
        {/* --- Feature Navigation --- */}
        <FeatureHeader />
      </div>
      {/* --- Navigation part --- */}
      <Navbar />
    </>
  );
};

export default Header;
