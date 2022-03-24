import LandingPage from "../components/LandingPage";
import ContactSection from "../components/ContactSection";
import Process from "../components/Process";
import ScrollingText from "../components/ScrollingText";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "../components/Post";

import dynamic from "next/dynamic";

const P5 = dynamic(() => import("../components/P5"), {
  ssr: false,
});

export default function Home({ posts }) {
  return (
    <>
      <P5 />
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
