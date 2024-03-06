import Head from 'next/head';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';
import HomeSection from '../components/Home';
import Conference from '../components/Conference';
import Committee from '../components/Committee';
import CallForPaper from '../components/CallForPaper';
import Submission from '../components/Submission';
import Speakers from '../components/Speakers';
import Authors from '../components/Authors';
import Registrations from '../components/Registrations';
import Archive from '../components/Archive';
import ImportantDates from '../components/ImportantDates';
import Contact from '../components/Contact';
import Workshop from '../components/Workshop';
import PaymentDetails from '../components/PaymentDetails';
import CallForPoster from '../components/CallForPoster';

export default function Home() {
  return (
    <>
      <Head>
        <title>ICCCSP 2024</title>
        <meta
          name="description"
          content="The 8th edition of the International Conference on Computer, Communication and Signal Processing ICCCSP 2024 has a special focus towards building sustainable AI solutions."
        />
        <link rel="icon" href="https://icccsp.com/img/ssn1.png" />
      </Head>

      <NavBar />
      <HomeSection />
      <Conference />
      <CallForPaper />
      <CallForPoster />
      <ImportantDates />
      <Submission />
      <Authors />
      <Committee />
      <Workshop />
      <Speakers />
      <Registrations />
      {/* <PaymentDetails /> */}
      <Contact />
      <Archive />
      <Footer />

    </>
  );
}
