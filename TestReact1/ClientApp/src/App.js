import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import Compoundr from './components/Compoundr';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/first-page' component={Counter} />
    <Route path='/compoundr' component={Compoundr} />
  </Layout>
);
