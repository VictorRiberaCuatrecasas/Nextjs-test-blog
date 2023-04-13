import Hero from "../components/Hero"
import FeaturedPosts from "../components/FeaturedPosts"
import {getFeaturedPosts} from "../lib/posts-util"


export default function HomePage(props) {

    return (
        <>
            <Hero />
            <FeaturedPosts posts={props.posts}/>
        </>
    )
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts()

    return {
        props: {
            posts: featuredPosts
        },
        revalidate: 10000
    }
}
