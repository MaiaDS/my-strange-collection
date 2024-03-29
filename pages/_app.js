import Head from "next/head";
import "../styles/globals.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>My Stange Collection</title>

        <link rel="manifest" href="/manifest.json" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicons/favicon-16x16.png"
        />

        <meta name="theme-color" content="#FFF" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
