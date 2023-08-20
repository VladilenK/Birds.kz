import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function About() {
      return (
        <Layout>
          <Head>
            <title>About Birds of Kazakhstan</title>
          </Head>
          <h1>About Birds.kz</h1>
          <h2>
            <Link href="/">Back to home</Link>
          </h2>
        </Layout>
      );
    }