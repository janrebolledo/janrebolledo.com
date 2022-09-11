import Link from "next/link";
import Image from "next/image";

export default function Post({ post }) {
  const { title, slug, coverImage, excerpt, tag } = post.fields;
  return (
    <Link href={`/projects/${slug}`} passHref>
      <div className="relative h-full md:w-[30vw] snap-start" tabIndex="0">
        <div className="relative md:h-full aspect-video md:aspect-auto">
          <Image
            src={"https:" + coverImage.fields.file.url}
            alt={coverImage.fields.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute top-0 left-0 p-5 flex flex-col justify-end w-full h-full bg-gradient-to-b from-transparent to-black/80">
          <h2>{title}</h2>
          <p className="hoefler">{tag}</p>
          <p>{excerpt}</p>
          <p className="btn mt-2">View Project →</p>
        </div>
      </div>
    </Link>
  );
}
