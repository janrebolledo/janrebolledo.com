import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ProjectPage({
  frontmatter: { title, date, cover_image },
  slug,
  excerpt,
  content,
}) {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <section className="project-section">
      <Head>
        <title>Jan Rebolledo — {title}</title>
        <meta name="description" content={excerpt} />
      </Head>
      <h2 data-aos="fade-up">{title}</h2>
      <p data-aos="fade-up" className="project-date">
        {date}
      </p>
      <img
        data-aos="fade-up"
        className="project-img"
        src={cover_image}
        alt="Project Image"
      />
      <div
        data-aos="fade-up"
        className="project-content"
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      ></div>
      <Link href="../projects">
        <a data-aos="fade-up" className="button">
          Go Back <span className="material-icons">chevron_right</span>
        </a>
      </Link>
    </section>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("projects"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("projects", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
