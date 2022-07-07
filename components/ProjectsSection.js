import AnimatedText from "react-animated-text-content";
import Post from "../components/Post";

export default function ProjectsSection({ posts }) {
  return (
    <section
      className="px-5 md:h-[80vh] grid gap-4 grid-cols-1 md:grid-cols-4"
      id="projects"
    >
      <div className="col-span-1">
        <AnimatedText
          animation={{ y: "40px", ease: "ease" }}
          type="chars"
          tag="h1"
          className="text-4xl hoefler"
        >
          Projects
        </AnimatedText>
        <p>View my recent work.</p>
      </div>
      <div className="col-span-1 md:col-span-3 md:overflow-x-scroll snap-mandatory snap-x projects">
        <div className="flex h-full gap-4 flex-col md:flex-row min-w-min">
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
