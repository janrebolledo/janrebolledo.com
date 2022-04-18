import Link from "next/link";

export default function Post({ post }) {
  const { title, slug, coverImage, excerpt, tag } = post.fields;
  return (
    <Link href={`/projects/${slug}`} passHref>
      <div tabIndex="0">
        <div className="project-card">
          <img
            className="project-card-img"
            src={coverImage.fields.file.url}
            alt={coverImage.fields.title}
          />
          <div className="project-info">
            <p className="project-scope">{tag}</p>
            <h3>{title}</h3>
            <p>{excerpt}</p>
            <a className="project-link">View Project →</a>
          </div>
        </div>
      </div>
    </Link>
  );
}
