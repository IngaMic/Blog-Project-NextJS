import ContactForm from "../components/contact/contact-form";
import Head from "next/head";
import { Fragment } from "react";
const ContactPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Contact Ingamic</title>
                <meta name="description" content="send ingamic a message" />
            </Head>
            <ContactForm />
        </Fragment>
    );
};

export default ContactPage;
