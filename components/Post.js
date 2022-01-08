import Link from "next/link";

export default function Post({ post }) {
  return (
    <Link href={`/projects/${post.slug}`}>
      <a tabIndex="0">
        <div className="project-card">
          <span className="project-card-img-container">
            <img
              className="project-card-img"
              src={post.frontmatter.cover_image}
              alt=""
            />
          </span>
          <div className="project-info">
            <h3>{post.frontmatter.title}</h3>
            <p className="project-date">{post.frontmatter.date}</p>
            <p>{post.frontmatter.excerpt}</p>
            <a className="button">
              View Project <span className="material-icons">chevron_right</span>
            </a>
          </div>
        </div>
      </a>
    </Link>
  );
}
