import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
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
      <section data-aos="fade-up" className="contact-section">
        <div>
          <h1>Let&apos;s work together.</h1>
          <p>Fill out this form with any inquires or a quote.</p>
        </div>
        <form
          name="contact"
          action="/contact/form-submitted"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="name">Name</label>
          <input name="name" type="text" placeholder="Name" />
          <label htmlFor="email">Email</label>
          <input name="email" type="email" placeholder="example@email.com" />
          <label htmlFor="name">Message</label>
          <textarea name="message" placeholder="Message" />
          <label htmlFor="file">File (Optional)</label>
          <input name="file" type="file" />
          <button>Send</button>
        </form>
      </section>
    </>
  );
}
