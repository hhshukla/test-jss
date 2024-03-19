import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import ImageWrapper from 'components/helpers/ImageWrapper/ImageWrapper';
import RichTextA11yWrapper from 'components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import React from 'react';
import { defaultData } from '@/stories/Footer/Footer.mock';
import { tv } from 'tailwind-variants';
import LinkWrapper from 'components/helpers/LinkWrapper/LinkWrapper';
import SvgIcon from 'components/helpers/SvgIcon/SvgIcon';

export type FooterDataProps = ComponentProps & {
  fields: typeof defaultData.fields;
};
const footer = tv({
  slots: {
    container: 'container mx-auto ',
    containerWithBg: 'bg-primary-gray-tint-400',
    flexJustifyPosition: 'flex justify-between',
    flexJustifyCenter: 'hidden lg:flex justify-between pt-[65px] pb-[70px]',
    flexJustifyWithItem: 'flex justify-center items-center',
    richTextclass:
      'text-[14px] w-[326px] md:text-4 font-regular leading-5  md:leading-[22px] font-poppin text-secondary-gray-dark md:w-[292px] pt-5 pb-[29px] md:pb-[25.14px]',
    flex: 'flex',
    imageGrid: 'grid grid-cols-2 gap-2',
    socialIconClass:
      'py-[11px] px-[16px] bg-white rounded-full shadow-lg mr-6 mb-[43px] cursor-pointer',
    navigationListClass: 'grid grid-cols-4  gap-16',
    listClass: 'pb-3 text-4 font-semibold leading-[22px]  list-none',
    secondaryListItemClass:
      'text-4 font-regular leading-[22px] font-poppin text-secondary-gray-dark pb-3  w-[152px] hover:underline',
    bottomFooterBg: 'bg-primary-gray-tint-300',
  },
});
const Footer = ({ fields }: FooterDataProps) => {
  const [expandedIndices, setExpandedIndices] = React.useState<number[]>([]);
  const [showTopBtn, setShowTopBtn] = React.useState(false);
  const [bottomPosition, setBottomPosition] = React.useState(16); // Initially attached to the bottom
  const [roundedButton, setRoundedButton] = React.useState(false);

  const {
    container,
    containerWithBg,
    flexJustifyPosition,
    flexJustifyCenter,
    flexJustifyWithItem,
    richTextclass,
    flex,
    imageGrid,
    socialIconClass,
    navigationListClass,
    listClass,
    secondaryListItemClass,
    bottomFooterBg,
  } = footer();
  React.useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window?.innerHeight;
      const bodyHeight = document?.body?.clientHeight;
      const scrollY = window?.scrollY;

      // Check if the user has scrolled to the end of the page
      const isEndOfPage = windowHeight + scrollY >= bodyHeight;

      if (isEndOfPage) {
        // If the user is at the end of the page, set button style to rounded-md
        setRoundedButton(false);
      } else {
        // If not at the end of the page, set button style to rounded-full
        setRoundedButton(true);
      }

      if (scrollY > 25) {
        setShowTopBtn(true);
        setBottomPosition(16); // Move button up by 50px
      } else {
        setShowTopBtn(false);
        setBottomPosition(0); // Keep the button attached to the bottom
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleAccordion = (index: number) => {
    if (expandedIndices?.includes(index)) {
      setExpandedIndices(expandedIndices?.filter((item) => item !== index));
    } else {
      setExpandedIndices([...expandedIndices, index]);
    }
  };
  if (!fields) {
    return <></>;
  }

  return (
    <>
      {/* Footer start */}
      <div className={containerWithBg()}>
        <div className={container()}>
          {/* Desktop View  start*/}
          <div className={flexJustifyCenter()}>
            <div>
              <a href="/" className="">
                <ImageWrapper field={fields?.Image} className="text-black" />
              </a>
              <RichTextA11yWrapper field={fields?.Description} className={richTextclass()} />
              <div className={flex()}>
                {/* {fields?.SocialNavigation?.map((iconData, index) => ( */}
                <div className={socialIconClass()}>
                  <a>
                    <SvgIcon icon="facebook" size="md" />
                  </a>
                </div>
                <div className={socialIconClass()}>
                  <a>
                    <SvgIcon icon="instagram" size="md" />
                  </a>
                </div>
                <div className={socialIconClass()}>
                  <a>
                    <SvgIcon icon="twitter" size="md" />
                  </a>
                </div>
                <div className={socialIconClass()}>
                  <a>
                    <SvgIcon icon="youtube" size="md" />
                  </a>
                </div>
                {/* ))} */}
              </div>
              <div>
                <div className={imageGrid()}>
                  <div className="mr-5">
                    <a href="" className="">
                      <ImageWrapper field={fields?.PlayStoreImage} />
                    </a>
                  </div>
                  <div>
                    <a href="" className="">
                      <ImageWrapper field={fields?.IOSImage} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <ul className={navigationListClass()}>
              {fields?.NavigationColumnList?.map((list, index) => (
                <div key={index} onClick={() => toggleAccordion(index)} className="cursor-pointer">
                  {list?.fields?.NavigationItemList?.map((item, index) => (
                    <div key={index}>
                      <div className={`mb-3 text-primary-less-black hover:text-primary-blue`}>
                        <LinkWrapper
                          className={listClass()}
                          field={{
                            value: {
                              href: 'https://www.breathefree.com/',
                              text: `${item.name}`,
                            },
                          }}
                        />
                      </div>

                      {item?.fields?.SecondaryNavigation?.map(
                        (secondaryItem, secondaryItemIndex) => (
                          <li key={secondaryItemIndex} className={secondaryListItemClass()}>
                            <LinkWrapper
                              field={{
                                value: {
                                  href: `${secondaryItem?.url}`,
                                  text: `${secondaryItem?.name}`,
                                },
                              }}
                            />
                          </li>
                        )
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </ul>
          </div>
          {/* Desktop View end */}
        </div>

        {/* Mobile View start*/}
        <div className="block lg:hidden">
          <div className="px-6 pt-[30px]">
            <div>
              <ImageWrapper field={fields?.Image} className="text-black" />
            </div>
            <RichTextA11yWrapper
              field={fields?.Description}
              className="text-[14px] w-[326px]  font-regular leading-5   font-poppin text-secondary-gray-dark  pt-5 pb-[29px]"
            />
          </div>
          {/*Footer Accordion start*/}
          <div className="flex flex-col justify-center px-6 border-gray-light cursor-pointer ">
            {fields?.NavigationColumnList?.map((list, index) => (
              <div key={index}>
                <div
                  onClick={() => toggleAccordion(index)}
                  className="cursor-pointer transition-colors duration-500 ease-in-out flex flex-col"
                >
                  <div>
                    {list?.fields?.NavigationItemList?.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex flex-col justify-center relative">
                        {item?.fields?.SecondaryNavigation?.length > 0 ? (
                          <div className="">
                            <li
                              className={`py-3 text-4 font-semibold leading-[22px] flex items-center text-${
                                expandedIndices === (item?.id as unknown)
                                  ? 'primary-blue'
                                  : 'primary-less-black'
                              } list-none`}
                            >
                              {console.log(item?.id)}
                              {item?.name}
                            </li>
                          </div>
                        ) : (
                          <LinkWrapper
                            className={`py-3 text-4 font-semibold leading-[22px] text-${
                              expandedIndices === (item?.id as unknown)
                                ? 'primary-blue'
                                : 'primary-less-black'
                            } list-none`}
                            field={{
                              value: {
                                href: 'https://www.breathefree.com/',
                                text: `${item?.name}`,
                              },
                            }}
                          />
                        )}
                        {expandedIndices?.includes(index) && (
                          <div className="transition-max-h duration-500 ease-in-out overflow-hidden">
                            {item?.fields?.SecondaryNavigation?.length !== 0 && (
                              <div>
                                <div className="pb-[6px]">
                                  <LinkWrapper
                                    className="font-poppin text-4 font-regular leading-[22px] text-secondary-gray-dark list-none pb-[6px]"
                                    field={{
                                      value: {
                                        href: 'https://www.breathefree.com/',
                                        text: `${item?.fields.LinkTitle?.value}`,
                                      },
                                    }}
                                  />
                                </div>

                                {item?.fields?.SecondaryNavigation?.map((data, dataIndex) => (
                                  <li
                                    className="font-poppin pb-[6px] text-4 font-regular leading-[22px] text-secondary-gray-dark list-none px-[21px] hover:underline "
                                    key={dataIndex}
                                  >
                                    <LinkWrapper
                                      field={{
                                        value: {
                                          href: `${data?.url}`,
                                          text: `${data?.name}`,
                                        },
                                      }}
                                    />
                                  </li>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                        <div className="absolute right-[2px] top-[18px]">
                          {item?.fields?.SecondaryNavigation?.length > 0 && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="9"
                              viewBox="0 0 14 9"
                              fill="none"
                              className={
                                expandedIndices?.includes(index)
                                  ? `transform rotate-180 transition-transform duration-500 ease-in-out text-primary-blue`
                                  : `transition-transform duration-500 ease-in-out text-primary-blue`
                              }
                            >
                              <path
                                d="M13 1L7 7.63437L1 0.999999"
                                stroke={expandedIndices?.includes(index) ? '#006eb8' : '#000000'}
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-center pt-[25px]">
              {fields?.SocialNavigation?.map((iconData, index) => (
                <div
                  className="py-[11px] px-[16px] bg-white rounded-full shadow-lg mr-6 mb-[43px]"
                  key={index}
                >
                  <ImageWrapper field={iconData?.fields?.SocialLinkIcon} />
                </div>
              ))}
            </div>
            <div className="flex justify-center pb-10">
              <div className="mr-5">
                <ImageWrapper field={fields?.PlayStoreImage} />
              </div>
              <div>
                <ImageWrapper field={fields?.IOSImage} />
              </div>
            </div>
          </div>
        </div>
        {/* Mobile View end */}
      </div>
      {/* Footer end */}

      {/* Bottom Footer start */}
      <div className={bottomFooterBg()}>
        <div className={container()}>
          <div className={flexJustifyPosition()}>
            <ul className="flex flex-wrap  py-7 px-6   font-normal">
              {fields?.CopyrightNavLinks?.map((CopyrightNavLink, CopyrightNavLinkIndex) => (
                <div className={flexJustifyWithItem()} key={CopyrightNavLinkIndex}>
                  <li className="text-[14px] font-regular leading-[18px] text-primary-less-black py-1">
                    {CopyrightNavLink?.fields?.LinkTitle?.value}
                  </li>
                  {CopyrightNavLinkIndex !== fields?.CopyrightNavLinks?.length - 1 && (
                    <span className="mx-3">|</span>
                  )}
                </div>
              ))}
            </ul>

            <div className="hidden md:flex items-end justify-end">
              <div className="bg-primary-green rounded- rounded-b-none mx-2 pt-[19px] pb-2 px-[19px]">
                <ImageWrapper field={fields?.FeedbackButton} className="" />
              </div>

              <div className="bg-primary-green cursor-pointer rounded-2xl rounded-b-none  flex justify-center items-center text-primary-white pr-[21px] mx-[10px]">
                <LinkWrapper field={fields?.InhalerDeviceUrl} />
                <Text
                  tag="p"
                  field={fields?.InhalerDeviceText}
                  className="text-[22px] font-semibold leading-[22px] pt-[19px] pb-2 px-2"
                />
                <ImageWrapper field={fields?.InhalerDeviceIcon} />
              </div>
              <div
                style={{
                  bottom: bottomPosition,
                  transition: 'bottom 0.3s',
                  position: 'fixed',
                  right: '20px',
                }}
                className="mx-5"
              >
                {showTopBtn && (
                  <button
                    className={`bg-primary-green  mx-2 pt-[19px] pb-2 px-[19px] ${
                      roundedButton ? 'rounded-full mb-4' : 'rounded-md rounded-b-none'
                    }  `}
                    onClick={goToTop}
                  >
                    <ImageWrapper
                      field={fields?.BackToTopIcon}
                      className="bg-green-400 p-1 rounded-md rounded-b-none mx-2"
                    />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Footer end */}
    </>
  );
};

export default Footer;
