import Navbar from 'src/components/Navbar/Navbar'
import DefaultLayout from 'src/layout/DefaultLayout'
import Aboutme from 'src/components/Aboutme/Aboutme';

export default function Home() {
  return (
    <DefaultLayout>
      <Navbar />
      <Aboutme />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          font-family: 'Barlow', sans-serif;
          margin: 0;
          font-weight: 300;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </DefaultLayout>
  );
};

