import Head from "next/head";

import Navbar from "src/components/Navbar/Navbar";
import DefaultLayout from "src/layout/DefaultLayout";
import Aboutme from "src/components/Aboutme/Aboutme";
import "./app.scss";
import Techstack from "src/components/Techstack/Techstack";

export default function Home() {
  return (
    <>
      <Head>
        <title>Derry Sukrie</title>
        <link rel='icon' href='/favicon.ico' />
        <html lang='en' />
        <meta
          name='description'
          content='A Frontend Engineer based in Jakarta, Indonesia'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&display=swap'
          rel='stylesheet'
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
