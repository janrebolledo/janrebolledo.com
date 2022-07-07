import Link from "next/link";

export default function Post({ post }) {
  const { title, slug, coverImage, excerpt, tag } = post.fields;
  return (
    <Link href={`/projects/${slug}`} passHref>
      <div className="relative h-full md:w-[30vw] snap-start" tabIndex="0">
        <img
          className="md:object-cover md:h-full"
          src={"https:" + coverImage.fields.file.url}
          alt={coverImage.fields.title}
        />
        <div className="absolute top-0 left-0 p-5 flex flex-col justify-end w-full h-full bg-gradient-to-b from-transparent to-black/80">
          <h3>{title}</h3>
          <p className="hoefler">{tag}</p>
          <p>{excerpt}</p>
          <p className="btn mt-2">View Project →</p>
        </div>
      </div>
    </Link>
  );
}
