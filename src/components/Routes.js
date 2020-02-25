import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import { CorpRoutes } from './Corp';
import { RangeRoutes } from './Range';
import { ContactRoutes } from './Contact';

export default () => (
  <Router>
    <Header/>
    <Route exact path="/" component={Main} />
    <Route path="/corp" component={CorpRoutes} />
    <Route path="/range" component={RangeRoutes} />
    <Route path="/contact" component={ContactRoutes} />
    <Footer/>
  </Router>
)