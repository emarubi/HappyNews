import React from 'react';
// import RegisterForm from 'src/components/register';
import CGU from 'src/components/CGU';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Page from 'src/components/Home/Page';
const Home = () => (
  <div>
    <Header />
    <Page />
    {/* pour tester le temps de faire des routes */}
    {/* <RegisterForm /> */}
    <CGU />
    <Footer />
  </div>
);

export default Home;
