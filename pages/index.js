import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";

import Hero from "../components/home-page/hero"

const DUMMY_POSTS = [
    {
        slug: "getting-started-with-nextjs",
        title: "Getting started with NextJS",
        image: "getting-started-nextjs.png",
        excerpt: "NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR.",
        date: "2021-07-20"
    },
     {
        slug: "getting-started-with-nextjs2",
        title: "Getting started with NextJS",
        image: "getting-started-nextjs.png",
        excerpt: "NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR.",
        date: "2021-07-20"
    },
     {
        slug: "getting-started-with-nextjs3",
        title: "Getting started with NextJS",
        image: "getting-started-nextjs.png",
        excerpt: "NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR.",
        date: "2021-07-20"
    },
     {
        slug: "getting-started-with-nextjs4",
        title: "Getting started with NextJS",
        image: "getting-started-nextjs.png",
        excerpt: "NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR.",
        date: "2021-07-20"
    }
]

const HomePage = () => {
    return <Fragment>
        <Hero/>
        <FeaturedPosts posts={DUMMY_POSTS}/>
    </Fragment>
}

export default HomePage;