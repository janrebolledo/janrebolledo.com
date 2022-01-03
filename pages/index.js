import LandingPage from "../components/LandingPage";
import ContactCTA from "../components/ContactCTA";
import Services from "../components/Services";
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
