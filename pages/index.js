import Navbar from 'src/components/Navbar/Navbar'
import DefaultLayout from 'src/layout/DefaultLayout'
import Aboutme from 'src/components/Aboutme/Aboutme';
import './app.scss';
import Techstack from 'src/components/Techstack/Techstack';

export default function Home() {
  return (
    <DefaultLayout>
      <Navbar />
      <Aboutme />
      <Techstack />
    </DefaultLayout>
  );
};

