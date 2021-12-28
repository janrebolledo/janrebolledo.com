import Link from "next/link";

export default function Post({ post }) {
  return (
    <Link href={`/projects/${post.slug}`}>
      <div className="project-card">
        <img
          className="project-img"
          src={post.frontmatter.cover_image}
          alt=""
        />
        <h3>{post.frontmatter.title}</h3>
        <p className="project-date">{post.frontmatter.date}</p>
        <p>{post.frontmatter.excerpt}</p>
          <a className="button">
            View Project <span className="material-icons">chevron_right</span>
          </a>
      </div>
    </Link>
  );
}
