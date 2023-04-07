import Hero from "../components/Hero"
import FeaturedPosts from "../components/FeaturedPosts"

const DUMMY_POSTS = [
 {
    slug: "getting-started-with-something-post",
    title: "getting started",
    image: "getting-started-nextjs.png",
    excerpt: "nextjs is cool",
    date: "2023-02-19"
 }
]

export default function HomePage() {
    return (
        <>
            <Hero />
            <FeaturedPosts posts={DUMMY_POSTS}/>
        </>
    )
}