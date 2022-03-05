import Head from "next/head";
import ContactSection from "../components/ContactSection";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Jan Rebolledo — Contact</title>
        <meta
          name="description"
          content="Let's work together. Fill out this form with any inquires or a quote."
        />
        {/* Facebook Tags */}

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://janrebolledo.com/contact" />
        <meta property="og:title" content="Jan Rebolledo — Contact" />
        <meta
          property="og:description"
          content="Let's work together. Fill out this form with any inquires or a quote."
        />

        {/* Twitter Tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://janrebolledo.com/contact"
        />
        <meta property="twitter:title" content="Jan Rebolledo — Contact" />
        <meta
          property="twitter:description"
          content="Let's work together. Fill out this form with any inquires or a quote."
        />
      </Head>
      <ContactSection />
    </>
  );
}
