import Link from 'next/link';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Birds of Kazakhstan</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>The main goal of the site - promoting birdwatching and creation of a culture of birdwatching in the post-Soviet space and other regions. In the world, millions of people are involved in birdwatching, and these are not always observers and photographers, there are tour organizers, guides, and sellers of feeders, perches, binoculars, other optics, there are special points for bird watching. Unfortunately, we don't have this yet.
        </p>
      </section>
    </Layout>
  );
}