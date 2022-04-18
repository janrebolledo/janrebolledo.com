import { marked } from "marked";
import Link from "next/link";
import Head from "next/head";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "post" });

  const paths = res.items.map((item) => {
    return {
      params: {
        slug: item.fields.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "post",
    "fields.slug": params.slug,
  });

  return {
    props: { post: items[0] },
  };
}

export default function ProjectPage({ post }) {
  const { title, coverImage, date, content, excerpt } = post.fields;
  return (
    <section className="project-section">
      <Head>
        <title>Jan Rebolledo — {title}</title>
        <meta name="description" content={excerpt} />
      </Head>
      <h2>{title}</h2>
      <p className="project-date">{date}</p>
      <img
        className="project-img"
        src={"https:" + coverImage.fields.file.url}
        alt={coverImage.fields.title}
      />
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
