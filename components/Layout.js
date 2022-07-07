import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

function Layout(props) {
  return (
    <main className="bg-black text-white min-h-screen scroll-smooth">
      <Header />
      <Head>
        <title>Jan Rebolledo — Multifaceted Web Developer</title>
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

        <meta name="shortcut icon" href="favicon.ico" />
      </Head>
      {props.children}
      <Footer />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <script
        data-host="https://microanalytics.io"
        data-dnt="false"
        src="https://microanalytics.io/js/script.js"
        id="ZwSg9rf6GA"
        async
        defer
      />
    </main>
  );
}

export default Layout;
