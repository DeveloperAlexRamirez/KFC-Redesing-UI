import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Menu from '../components/Menu';

const Home = () => {
  return (
    <div>
      {/* Fonts */}
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;800&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap"
          rel="stylesheet"
        ></link>

        <title>KFC-Redesing-UI</title>
      </Head>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* ALL COMPONENTS */}
        <Header />
        <Menu />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
