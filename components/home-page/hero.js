import Image  from "next/image";

import classes from "./hero.module.css"

const HeroPage = () => {
    return <section className={classes.hero}>
        <div className={classes.image}>
           <Image src="/images/site/yup.jpg" alt="an image showing the author" width={300} height={300} />
        </div>
        <h1>Hi, I'm Inga</h1>
        <p>I blog about development and everything in between</p>
    </section>
}

export default HeroPage;