import Head from 'next/head';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      {/* Fonts */}
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;800&display=swap"
          rel="stylesheet"
        />

        <title>KFC-Redesing-UI</title>
      </Head>

      {/* ALL COMPONENTS */}
      <Header />
    </div>
  );
};

export default Home;
