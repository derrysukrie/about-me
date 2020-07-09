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
          padding: 4rem 10rem 2rem 10rem
        }
      `}</style>
    </div>
  );
};

export default DefaultLayout;
