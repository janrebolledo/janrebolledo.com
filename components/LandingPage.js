import Portrait from "../public/Portrait.jpg";
import Link from "next/link";

export default function Landingpage() {
  return (
    <>
      <section id="home" data-aos="fade-up" tabIndex="0">
        <div>
          <h1>
            Hi! I&apos;m a{" "}
            <span className="underline">Multifaceted Web Developer</span> &amp;{" "}
            <span className="underline">Graphic Designer</span>.
          </h1>
          <p>Making your vision a reality.</p>
          <Link href="/projects">
            <a className="button">
              Explore Projects
              <span className="material-icons">chevron_right</span>
            </a>
          </Link>
        </div>
        <img
          className="img-responsive"
          alt="Portrait of Jan Rebolledo"
          src={Portrait.src}
        />
      </section>
    </>
  );
}
