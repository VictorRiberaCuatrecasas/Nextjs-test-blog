import styles from "./FeaturedPosts.module.css";
import PostsGrid from "./posts/PostsGrid"

export default function FeaturedPosts(props) {
  return (
    <section className={styles.latest}>
      <h2>Featured posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
