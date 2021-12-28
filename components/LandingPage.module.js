import Portrait from "../public/Portrait.jpg";
import Link from "next/link";

export default function Landingpage() {
  return (
    <>
      <section>
        <div>
          <h1>Hi! I'm a Multifaceted Web Developer &amp; Graphic Designer.</h1>
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
