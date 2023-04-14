import Hero from "../components/Hero";
import FeaturedPosts from "../components/FeaturedPosts";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";

export default function HomePage(props) {
  return (
    <>
      {" "}
      <Head>
        <title>Victors blog</title>
        <meta
          name="description"
          content="Here i post about programming stuff to practise nextjs"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 10000,
  };
}
