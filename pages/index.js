import Head from 'next/head';
import React from 'react';
import Navbar from 'src/components/Navbar/Navbar';
import DefaultLayout from 'src/layout/DefaultLayout';
import Aboutme from 'src/components/Aboutme/Aboutme';
import Techstack from 'src/components/Techstack/Techstack';

import './app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Derry Sukrie</title>
        <link rel="icon" href="/favicon.ico" />
        <html lang="en" />
        <meta
          name="description"
          content="A Frontend Engineer based in Jakarta, Indonesia"
        />
        <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
        <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/toxicity"></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <DefaultLayout>
        <Navbar />
        <Aboutme />
        <Techstack />
      </DefaultLayout>
    </>
  );
}
