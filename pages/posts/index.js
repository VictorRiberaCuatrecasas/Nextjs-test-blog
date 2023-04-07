import AllPosts from "../../components/posts/AllPosts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-something-post",
    title: "getting started",
    image: "getting-started-nextjs.png",
    excerpt: "nextjs is cool",
    date: "2023-02-19",
  },
];

export default function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}
