import PostHeader from "./PostHeader";
import styles from "./PostContent.module.css";
import ReactMarkdown from "react-markdown";

const DUMMY_POST = {
  slug: "getting-started-with-something-post",
  title: "getting started",
  image: "getting-started-nextjs.png",
  excerpt: "nextjs is cool",
  date: "2023-02-19",
  content: "# This is a first post",
};

export default function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={styles.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}
