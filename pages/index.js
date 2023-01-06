import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import ScrollingText from "../components/ScrollingText";

import { createClient } from "contentful";

import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import Instagram from "../public/Social-Icons/Instagram.png";
import Twitter from "../public/Social-Icons/Twitter.png";
import Twitch from "../public/Social-Icons/Twitch.png";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "post" });

  return {
    props: {
      posts: res.items,
    },
  };
}

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <meta
          property="description"
          content="Web Developer, Creating unique digital experiences that drive results."
        />
      </Head>
      <Landing />
      <ProjectsSection posts={posts} />
      <ScrollingText />
      <ContactSection />
    </>
  );
}

function Landing() {
  return (
    <section className="px-5 py-8" id="home">
      <div>
        <p className="hoefler">Web Developer,</p>
        <h1 className="text-2xl">
          Creating Unique Digital Experiences That Drive{" "}
          <span className="hoefler">Results</span>
        </h1>
        <div className="flex flex-row flex-wrap gap-4">
          <a
            target="_blank"
            rel="nofollow noreferrer"
            href="https://instagram.com/janconcepts"
          >
            <Image src={Instagram} width={32} height={32} alt="Instagram" />
          </a>
          <a
            target="_blank"
            rel="nofollow noreferrer"
            href="https://twitter.com/janconcepts"
          >
            <Image src={Twitter} width={32} height={32} alt="Twitter" />
          </a>
          <a
            target="_blank"
            rel="nofollow noreferrer"
            href="https://twitch.tv/janrebolledo"
          >
            <Image src={Twitch} width={32} height={32} alt="Twitch" />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-4 py-8">
        <Link href="#projects">
          <p className="text-6xl md:text-8xl cursor-pointer">
            Explore <span className="hoefler">Projects</span> &rarr;
          </p>
        </Link>
        <Link href="#contact">
          <p className="text-6xl md:text-8xl cursor-pointer">Contact &rarr;</p>
        </Link>
      </div>
    </section>
  );
}
