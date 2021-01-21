import React from 'react';
// import CGU from 'src/components/Footer/CGU';
import Footer from 'src/components/Footer';
// import RegisterForm from 'src/components/Register';
import About from 'src/components/Footer/About';
import Header from 'src/components/Header';
import Page from 'src/components/Home/Page';
// import Terms from 'src/components/Footer/Terms';
const Home = () => (
  <div>
    <Header />
    <Page />
    {/* pour tester le temps de faire des routes */}
    {/* <RegisterForm /> */}
    {/* <CGU /> */}
    {/* <Terms /> */}
    <About />
    <Footer />
  </div>
);

export default Home;