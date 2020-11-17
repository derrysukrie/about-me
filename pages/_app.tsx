import Head from 'next/head';
import React from 'react';

import './app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import DefaultLayout from 'layout/DefaultLayout';
import Navbar from 'components/Navbar/Navbar';
import Aboutme from 'components/Aboutme/Aboutme';
import Techstack from 'components/Techstack/Techstack';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Derry Sukrie</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A Frontend Engineer based in Jakarta, Indonesia"
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
