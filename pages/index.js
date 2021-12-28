import LandingPage from "../components/LandingPage.module";
import ContactCTA from "../components/ContactCTA.module";
import Services from "../components/Services.module";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Esports Branding &amp; Web Development. I help esports teams create memorable brands and effective websites."
        />
      </Head>
      <LandingPage />
      <Services />
      <ContactCTA />
    </>
  );
}
