import LandingPage from "../components/LandingPage";
import ContactSection from "../components/ContactSection";
import Process from "../components/Process";
import ScrollingText from "../components/ScrollingText";
import Post from "../components/Post";

import Head from "next/head";

import { createClient } from "contentful";

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
        <title>Jan Rebolledo — Multifaceted Web Developer</title>
        {/* Facebook Tags */}

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://janrebolledo.com/" />
        <meta
          property="og:title"
          content="Jan Rebolledo — Multifaceted Web Developer"
        />
        <meta
          property="og:description"
          content="Creating Unique Web Experiences"
        />
        <meta
          property="og:image"
          content="https://janrebolledo.com/socialpreview.png"
        />

        {/* Twitter Tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://janrebolledo.com/" />
        <meta
          property="twitter:title"
          content="Jan Rebolledo — Multifaceted Web Developer"
        />
        <meta
          property="twitter:description"
          content="Creating Unique Web Experiences"
        />
        <meta
          property="twitter:image"
          content="https://janrebolledo.com/socialpreview.png"
        />
      </Head>
      <LandingPage />
      <section className="projects-section" id="projects">
        <h2>PROJECTS</h2>
        <div className="projects-container">
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </section>
      <ScrollingText />
      <Process />
      <ContactSection />
    </>
  );
}
