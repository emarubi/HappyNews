import React from 'react';
// import CGU from 'src/components/CGU';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Page from 'src/components/Home/Page';
import RegisterForm from 'src/components/register';
// import About from '../About';
// import Terms from '../Terms';
const Home = () => (
  <div>
    <Header />
    <Page />
    {/* pour tester le temps de faire des routes */}
    <RegisterForm />
    {/* <CGU /> */}
    {/* <Terms /> */}
    {/* <About /> */}
    <Footer />
  </div>
);

export default Home;
