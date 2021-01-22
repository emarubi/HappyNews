import React from 'react';
import Footer from 'src/components/Footer';
// import About from 'src/components/Footer/About';
// import CGU from 'src/components/Footer/CGU';
// import Terms from 'src/components/Footer/Terms';
import Header from 'src/components/Header';
import ContactForm from '../Footer/ContactForm';
// import RegisterForm from 'src/components/Register';
// import Login from '../Login';
// import NotFound from '../404';
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
    <ContactForm />
    <Footer />
  </div>
);

export default Home;
