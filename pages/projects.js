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

export default function Projects({ posts }) {
  return (
    <>
      <Head>
        <title>Jan Rebolledo — Projects</title>
        <meta
          name="description"
          content="A collection of my best projects I've made."
        />
        {/* Facebook Tags */}

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://janrebolledo.com/projects" />
        <meta property="og:title" content="Jan Rebolledo — Projects" />
        <meta
          property="og:description"
          content="A collection of my best projects I've made."
        />

        {/* Twitter Tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://janrebolledo.com/projects"
        />
        <meta property="twitter:title" content="Jan Rebolledo — Projects" />
        <meta
          property="twitter:description"
          content="A collection of my best projects I've made."
        />
      </Head>
      <section className="projects-section" id="projects">
        <h2>Projects</h2>
        <div className="projects-container">
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
