import React from 'react';
// import Login from '../Login';
import Footer from 'src/components/Footer';
// import CGU from 'src/components/Footer/CGU';
// import Terms from 'src/components/Footer/Terms';
// import RegisterForm from 'src/components/Register';
// import About from 'src/components/Footer/About';
import Header from 'src/components/Header';
import NotFound from '../404';
// import Page from 'src/components/Home/Page';

const Home = () => (
  <div>
    <Header />
    {/* <Page /> */}
    {/* pour tester le temps de faire des routes */}
    {/* <RegisterForm /> */}
    {/* <CGU /> */}
    {/* <Terms /> */}
    {/* <About /> */}
    {/* <NotFound /> */}
    {/* <Login /> */}
    <NotFound />
    <Footer />
  </div>
);

export default Home;
