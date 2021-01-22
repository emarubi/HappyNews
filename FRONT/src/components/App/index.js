// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// == Import
import NotFound from 'src/components/404';
import About from 'src/components/About';
import CGU from 'src/components/CGU';
import ContactForm from 'src/components/ContactForm';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Login from 'src/components/Login';
import Terms from 'src/components/Terms';
import NewsModal from 'src/components/NewsModal';
import AddNewsForm from 'src/components/AddNewsForm';
// == Import CSS
import './styles.scss';




// == Composant
const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      {/* <Route exact path="/inscription">
        <Login />
      </Route> */}
      <Route exact path="/connexion">  
        <Login /> 
      </Route>
      {/* Route provisoire pour afficher le détail d'une carte */}
      <Route exact path="/newsmodal">  
        <NewsModal /> 
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

// == Export
export default App;

