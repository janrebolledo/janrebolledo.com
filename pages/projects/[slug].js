import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import Head from "next/head";

export default function ProjectPage({
  frontmatter: { title, date, cover_image },
  slug,
  excerpt,
  content,
}) {
  return (
    <section className="project-section">
      <Head>
        <title>Jan Rebolledo — {title}</title>
        <meta name="description" content={excerpt} />
      </Head>
      <h2>{title}</h2>
      <p className="project-date">{date}</p>
      <img className="project-img" src={cover_image} alt="Project Image" />
      <div
        className="project-content"
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      ></div>
      <Link href="../projects">
        <a className="button">
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
