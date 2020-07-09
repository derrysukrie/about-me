import React from 'react';
import Head from 'next/head'

const DefaultLayout = ({ children }) => {
  return (
    <div className="container">
      <Head>
        <title>Derry Sukrie</title>
        <link rel="icon" href="/favicon.ico" />
        <html lang="en" />
        <meta name="description" content="A Frontend Engineer based in Jakarta, Indonesia"/>
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      {children}

      <style jsx>{`
        .container {
          box-sizing: border-box;
          margin: 0;
          min-width: 0;
          width: 100%;
          height: 100vh;
          max-width: container;
          margin-left: auto;
          margin-right: auto;
          padding: 1rem;
          max-width: 1024px;
        }
      `}</style>
    </div>
  );
};

export default DefaultLayout;
