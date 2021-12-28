import LandingPage from "../components/LandingPage.module";
import ContactCTA from "../components/ContactCTA.module";
import Services from "../components/Services.module";

export default function Home() {
  return (
    <>
      <LandingPage />
      <Services />
      <ContactCTA />
    </>
  );
}
