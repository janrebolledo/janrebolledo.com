import { marked } from "marked";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { createClient } from "contentful";
import AnimatedText from "react-animated-text-content";

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
  const { title, coverImage, date, content, excerpt, tag, slug } = post.fields;
  const seoTitle = "Jan Rebolledo — " + title;
  return (
    <section className="px-5">
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={excerpt} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={excerpt} />
        <meta
          property="og:url"
          content={"https://janrebolledo.com/projects/" + slug}
        />
        <meta
          property="og:image"
          content={"https:" + coverImage.fields.file.url}
        />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>
      <div className="grid grid-cols-1 md:grid-cols-2 mb-4">
        <div>
          <Link href="/" className="btn flex items-center mb-4">
            &larr; Go Back
          </Link>
          <AnimatedText
            animation={{ y: "40px", ease: "ease" }}
            type="chars"
            className="text-2xl font-bold inline-flex"
          >
            {title}
          </AnimatedText>
          <div className="grid md:grid-cols-2">
            <div>
              <h2 className="hoefler text-xl mt-2">Date</h2>
              <p>{date}</p>
            </div>
            <div>
              <h2 className="hoefler text-xl mt-2">Project Scope</h2>
              <p>{tag}</p>
            </div>
            <div>
              <h2 className="hoefler text-xl mt-2">Project Overview</h2>
              <p>{excerpt}</p>
            </div>
          </div>
        </div>
        <div className="relative mt-4 aspect-video md:aspect-auto">
          <Image
            src={"https:" + coverImage.fields.file.url}
            alt={coverImage.fields.title}
            fill="true"
            sizes="(max-width: 1200px) 50vw, 70vw"
            className="object-cover"
          />
        </div>
      </div>
      <div
        className="project-content mb-12 flex flex-col gap-4"
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      />
    </section>
  );
}
