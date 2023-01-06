export default function ContactSection() {
  return (
    <section
      className="px-5 grid grid-cols-1 md:grid-cols-2 mb-12"
      id="contact"
    >
      <div>
        <h1 className="text-4xl hoefler inline-flex">Contact</h1>
        <p>Let&apos;s work together. Turn your vision into a reality.</p>
      </div>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="flex flex-col gap-4"
      >
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name">NAME</label>
        <input
          name="name"
          type="text"
          placeholder="NAME"
          className="bg-black text-white border-2 border-solid border-white px-4 py-2 rounded-none"
        />
        <label htmlFor="email">EMAIL</label>
        <input
          name="email"
          type="email"
          placeholder="EXAMPLE@EMAIL.COM"
          className="bg-black text-white border-2 border-solid border-white px-4 py-2 rounded-none"
        />
        <label htmlFor="name">MESSAGE</label>
        <textarea
          name="message"
          placeholder="MESSAGE"
          className="bg-black text-white border-2 border-solid border-white px-4 py-2 rounded-none"
        />
        <button className="btn">SEND</button>
      </form>
    </section>
  );
}
