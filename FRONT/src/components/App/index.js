// == Import npm
import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// == Import
import NotFound from 'src/components/404';
import About from 'src/components/About';
import CGU from 'src/components/CGU';
import ContactForm from 'src/components/ContactForm';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
// import NewsModal from 'src/components/NewsModal';
import Terms from 'src/components/Terms';
import AddNewsForm from 'src/containers/addNews';
// import Header from 'src/components/Header';
import Header from 'src/containers/header';
import Login from 'src/containers/login';
import News from 'src/containers/news';
// import Register from 'src/components/Register';
import Register from 'src/containers/register';
// import Login from 'src/components/Login';
import RetaillerP from 'src/containers/RetaillerP';
// == Import CSS
import './styles.scss';

// == Composant
const App = ({ isLogged, isRegistered }) => (
  <div className="page_container">
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/connexion">
        {isLogged ? <Redirect to="/news/liste" /> : <Login />}
      </Route>
      <Route exact path="/inscription">
        {isRegistered ? <Redirect to="/connexion" /> : <Register />}
        {/* <Register /> */}
      </Route>
      <Route exact path="/commercant/profil/:id">
        {/* { isLogged ? <RetaillerP /> : <Redirect to="/news/liste" />} */}
        <RetaillerP />
      </Route>
      <Route exact path="/news/liste">
        <News />
      </Route>
      <Route exact path="/creation-de-news">
        <AddNewsForm />
      </Route>
      <Route exact path="/condition-generales-d'utilisations">
        <CGU />
      </Route>
      <Route exact path="/nous-contacter/formulaire">
        <ContactForm />
      </Route>
      <Route exact path="/mentions-légales">
        <Terms />
      </Route>
      <Route exact path="/a-propos-de-nous">
        <About />
      </Route>
      <Route exact path="*">
        <NotFound />
      </Route>
    </Switch>
    <Footer />
  </div>
);

App.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

// == Export
export default App;
