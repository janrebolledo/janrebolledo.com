export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div>
        <h1>LET&apos;S WORK TOGETHER.</h1>
        <p>TURN YOUR VISION INTO A REALITY.</p>
      </div>
      <form
        name="contact"
        action="/contact/form-submitted"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name">NAME</label>
        <input name="name" type="text" placeholder="NAME" />
        <label htmlFor="email">EMAIL</label>
        <input name="email" type="email" placeholder="EXAMPLE@EMAIL.COM" />
        <label htmlFor="name">MESSAGE</label>
        <textarea name="message" placeholder="MESSAGE" />
        <button>SEND</button>
      </form>
    </section>
  );
}
