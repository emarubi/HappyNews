// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
// == Import
import Home from 'src/components/Home';
import NotFound from '../404';
import './styles.scss';


// == Composant
const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
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
