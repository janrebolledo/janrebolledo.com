import LandingPage from "../components/LandingPage.module";
import ContactCTA from "../components/ContactCTA.module";
import Services from "../components/Services.module";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <>
      <LandingPage />
      <Services />
      <ContactCTA />
    </>
  );
}
