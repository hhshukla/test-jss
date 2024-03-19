import React from 'react';
import Head from 'next/head';
import {
  Placeholder,
  VisitorIdentification,
  getPublicUrl,
  LayoutServiceData,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Navigation from 'components/Layout/Navigation';

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
const publicUrl = getPublicUrl();

interface LayoutProps {
  layoutData: LayoutServiceData;
}

const Layout = ({ layoutData }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;

  return (
    <>
      <Head>
        <title>{route?.fields?.pageTitle?.value || 'Page'}</title>
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
        <link rel="preload" href="https://fonts.googleapis.com" />
        <link rel="preload" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Elsie&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* <Head>
        <link
          rel="preload"
          href={`/fonts/Poppins-Regular.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head> */}

      {/*
        VisitorIdentification is necessary for Sitecore Analytics to determine if the visitor is a robot.
        If Sitecore XP (with xConnect/xDB) is used, this is required or else analytics will not be collected for the JSS app.
        For XM (CMS-only) apps, this should be removed.

        VI detection only runs once for a given analytics ID, so this is not a recurring operation once cookies are established.
      */}
      <VisitorIdentification />

      <Navigation />
      {/* root placeholder for the app, which we add components to using route data */}
      <header>{route && <Placeholder name="sxa-jss-header" rendering={route} />}</header>

      <main>{route && <Placeholder name="sxa-jss-main" rendering={route} />}</main>

      <footer>{route && <Placeholder name="sxa-jss-footer" rendering={route} />}</footer>
    </>
  );
};

export default Layout;
