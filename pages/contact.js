import ContactForm from "../components/contact/ContactForm";
import Head from "react/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>contact</title>
        <meta name="description" content="Here you can contact me" />
      </Head>
      <ContactForm />
    </>
  );
}
