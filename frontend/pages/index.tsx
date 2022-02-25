import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HeroSection from "../components/HeroSection/index";
import FAQWrapper from "../components/Faqs";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS/Typescript Demo</title>
        <meta
          name="description"
          content="Test project cloned with https://standfortrees.org/faq/"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HeroSection />
        <FAQWrapper />
      </main>
    </div>
  );
};

export default Home;
