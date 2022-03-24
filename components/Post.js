import Link from "next/link";

export default function Post({ post }) {
  return (
    <Link href={`/projects/${post.slug}`} passHref>
      <div tabIndex="0">
        <div className="project-card">
          <img
            className="project-card-img"
            src={post.frontmatter.cover_image}
            alt=""
          />
          <div className="project-info">
            <p className="project-scope">{post.frontmatter.projectscope}</p>
            <h3>{post.frontmatter.title}</h3>
            <p>{post.frontmatter.excerpt}</p>
            <a className="project-link">View Project →</a>
          </div>
        </div>
      </div>
    </Link>
  );
}
