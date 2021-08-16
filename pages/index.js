import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Head from "next/head";

import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";

const HomePage = (props) => {
    return (
        <Fragment>
            <Head>
                <title>Ingamic Blog</title>
                <meta
                    name="description"
                    content="ingamic blog for web development"
                />
            </Head>
            <Hero />
            <FeaturedPosts posts={props.posts} />
        </Fragment>
    );
};

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();
    return {
        props: {
            posts: featuredPosts,
        },
        revalidate: 100,
    };
}

export default HomePage;
