import Link from "next/link";
import Image from "next/image";

export default function Post({ post }) {
  const { title, slug, coverImage, excerpt, tag } = post.fields;
  return (
    <Link
      href={`/projects/${slug}`}
      className="relative inline h-full md:w-[30vw] snap-start group"
      tabIndex="0"
    >
      <div className="relative md:h-full aspect-video md:aspect-auto group-hover:opacity-50 transition-all">
        <Image
          src={"https:" + coverImage.fields.file.url}
          alt={coverImage.fields.title}
          fill="true"
          sizes="(max-width: 1200px) 50vw, 70vw"
          className="object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 p-5 flex flex-col justify-end w-full h-full bg-gradient-to-b from-transparent to-black/80">
        <h2>{title}</h2>
        <p className="hoefler">{tag}</p>
        <p>{excerpt}</p>
        <p className="btn mt-2">View Project →</p>
      </div>
    </Link>
  );
}
