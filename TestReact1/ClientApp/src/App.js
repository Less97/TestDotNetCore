import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import CagrCalculator from './components/CagrCalculator';
import Compoundr from './components/Compoundr';

export default () => (
  <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/cagrInterest' component={CagrCalculator} />
        <Route path='/compoundr' component={Compoundr} />
  </Layout>
);
