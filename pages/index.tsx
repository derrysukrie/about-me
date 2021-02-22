import DefaultLayout from 'layout/DefaultLayout';
import Navbar from 'components/Navbar/Navbar';
import Aboutme from 'components/Aboutme/Aboutme';
import Techstack from 'components/Techstack/Techstack';

export default function Home() {
  return (
    <DefaultLayout>
      <Navbar />
      <Aboutme />
      <Techstack />
    </DefaultLayout>
  );
}
