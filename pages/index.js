import LandingPage from "../components/LandingPage";
import ContactSection from "../components/ContactSection";
import Process from "../components/Process";
import ScrollingText from "../components/ScrollingText";
import Post from "../components/Post";

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
