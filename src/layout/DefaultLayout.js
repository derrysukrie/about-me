import React from 'react';
import Head from 'next/head'

const DefaultLayout = ({ children }) => {
  return (
    <div className="container">
      <Head>
        <title>Derry Sukrie</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@500;600;700&display=swap" rel="stylesheet" />
      </Head>
      {children}

      <style jsx>{`
        .container {
          box-sizing: border-box;
          margin: 0;
          min-width: 0;
          width: 100%;
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
