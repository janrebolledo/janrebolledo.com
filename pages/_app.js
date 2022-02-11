import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

import { useRouter } from "next/router";

function App({ Component, pageProps }) {
  const router = useRouter();
  if (router.pathname == "/") {
    return (
      <>
        <Head>
          <title>
            Jan Rebolledo — Multifaceted Web Developer &amp; Graphic Designer
          </title>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
          />
          <meta name="robots" content="index, follow" />
          <meta
            name="keywords"
            content="Jan Rebolledo,graphic designer,motion designer,web designer,web developer"
          />
          <script
            data-host="https://microanalytics.io"
            data-dnt="false"
            src="https://microanalytics.io/js/script.js"
            id="ZwSg9rf6GA"
            async=""
            defer=""
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
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
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="theme-color" content="#36a630" />

          {/* Facebook Tags */}

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://janrebolledo.com/" />
          <meta
            property="og:title"
            content="Jan Rebolledo — Multifaceted Web Developer &amp; Graphic Designer"
          />
          <meta
            property="og:description"
            content="Esports Branding &amp; Web Development. I help esports teams create memorable brands and effective websites."
          />
          <meta
            property="og:image"
            content="https://janrebolledo.com/socialpreview.png"
          />

          {/* Twitter Tags */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://janrebolledo.com/" />
          <meta
            property="twitter:title"
            content="Jan Rebolledo — Multifaceted Web Developer &amp; Graphic Designer"
          />
          <meta
            property="twitter:description"
            content="Esports Branding &amp; Web Development. I help esports teams create memorable brands and effective websites."
          />
          <meta
            property="twitter:image"
            content="https://janrebolledo.com/socialpreview.png"
          />
        </Head>
        <Component {...pageProps} />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>
            Jan Rebolledo — Multifaceted Web Developer &amp; Graphic Designer
          </title>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
          />
          <meta name="robots" content="index, follow" />
          <meta
            name="keywords"
            content="Jan Rebolledo,graphic designer,motion designer,web designer,web developer"
          />
          <script
            data-host="https://microanalytics.io"
            data-dnt="false"
            src="https://microanalytics.io/js/script.js"
            id="ZwSg9rf6GA"
            async=""
            defer=""
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
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
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="theme-color" content="#36a630" />

          {/* Facebook Tags */}

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://janrebolledo.com/" />
          <meta
            property="og:title"
            content="Jan Rebolledo — Multifaceted Web Developer &amp; Graphic Designer"
          />
          <meta
            property="og:description"
            content="Esports Branding &amp; Web Development. I help esports teams create memorable brands and effective websites."
          />
          <meta
            property="og:image"
            content="https://janrebolledo.com/socialpreview.png"
          />

          {/* Twitter Tags */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://janrebolledo.com/" />
          <meta
            property="twitter:title"
            content="Jan Rebolledo — Multifaceted Web Developer &amp; Graphic Designer"
          />
          <meta
            property="twitter:description"
            content="Esports Branding &amp; Web Development. I help esports teams create memorable brands and effective websites."
          />
          <meta
            property="twitter:image"
            content="https://janrebolledo.com/socialpreview.png"
          />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
    );
  }
}

export default App;
