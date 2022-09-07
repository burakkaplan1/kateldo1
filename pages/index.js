import Head from "next/head";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Homepage from "../Components/Homepage/Homepage";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["Common"])),
      // Will be passed to the page component as props
    },
  };
}

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Kateldo v3</title>
        <link rel="icon" href="/kateldomor.webp" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Head>

      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}
