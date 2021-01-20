import React from 'react';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Page from 'src/components/Home/Page';
import RegisterForm from 'src/components/register';

const Home = () => (
  <div>
    <Header />
    <Page />
    {/* pour tester le temps de faire des routes */}
    <RegisterForm />
    <Footer />
  </div>
);

export default Home;
