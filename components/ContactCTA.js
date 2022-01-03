import Link from "next/link";

export default function ContactCTA() {
  return (
    <>
      <section data-aos="fade-up" tabIndex="0" className="cta-section">
        <div>
          <h1>Interested in working together?</h1>
          <p>Contact me and let&apos;s get started!</p>
          <Link href="/contact">
            <a className="button">
              Contact <span className="material-icons">chevron_right</span>
            </a>
          </Link>
        </div>
      </section>
    </>
  );
}