import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "../components/Post.module";
import Head from "next/head";

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
        <meta property="og:description" content="A collection of my best projects I've made." />

        {/* Twitter Tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://janrebolledo.com/projects" />
        <meta property="twitter:title" content="Jan Rebolledo — Projects" />
        <meta property="twitter:description" content="A collection of my best projects I've made." />
      </Head>
      <section className="projects-section">
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

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("projects"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("projects", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
