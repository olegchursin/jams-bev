import Head from 'next/head';
import Cocktails from '../components/cocktails';
import FooterSection from '../components/footer';
import Header from '../components/header';

const siteName = 'JAMS Cocktails';
const pageTitle = 'JAMS Specialty Cocktails';
const currentURL = 'https://jamsbev.olegchursin.com';
const twitterHandle = '@chursin';
const previewImage =
  'https://ik.imagekit.io/olegchursin/jams-cocktails_YmbBfarob.png?updatedAt=1683298121268';
const description =
  'Discover a world of creative and captivating specialty cocktails at our bar, where every drink is expertly crafted and infused with unique and tantalizing flavors.';

export default function Index(): JSX.Element {
  return (
    <>
      <Head>
        <title>JAMS Cocktails</title>
        <meta name="description" content={description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta
          property="og:url"
          content="https://jamsbev.olegchursin.com/"
          key="ogurl"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteName} key="ogsitename" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdescr" />
        <meta property="og:image" content={previewImage} key="ogimage" />

        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta property="twitter:domain" content="jamsbev.olegchursin.com" />
        <meta property="twitter:url" content={currentURL} key="twurl" />
        <meta name="twitter:creator" content={twitterHandle} key="twhandle" />
        <meta name="twitter:title" content={pageTitle} key="twtitle" />
        <meta name="twitter:description" content={description} key="twdescr" />
        <meta name="twitter:image" content={previewImage} key="twimg" />
      </Head>
      <Header />
      <div className="dark:bg-gray-900">
        <main className="container mx-auto">
          <Cocktails />
        </main>
        <FooterSection />
      </div>
    </>
  );
}
