import React from 'react';
import ToxicityApp from 'src/components/ToxicityApp/ToxicityApp';
import Head from 'next/head';

function Toxicity() {
  return (
    <>
      <Head>
        <title>Toxicity App</title>
        <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs" />
        <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/toxicity" />
      </Head>
      <ToxicityApp />
    </>
  );
}

export default Toxicity;
