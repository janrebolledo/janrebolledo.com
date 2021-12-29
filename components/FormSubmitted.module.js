import Link from "next/link";

export default function FormSubmitted() {
  return (
    <>
      <section tabIndex="0" className="cta-section">
        <div>
          <h1>Thank you!</h1>
          <p>Thanks for reaching out, I&apos;ll get back to you as soon as possible!</p>
          <Link href="/">
            <a className="button">
              Go Home <span className="material-icons">chevron_right</span>
            </a>
          </Link>
        </div>
      </section>
    </>
  );
}
