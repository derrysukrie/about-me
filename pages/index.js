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
    <div>
      <Head>
        <title>Derry Sukrie</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Frontend Engineer based in Jakarta, Indonesia"
        />
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
    </div>
  );
}
