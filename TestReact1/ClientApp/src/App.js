import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import CagrCalculator from './components/CagrCalculator/CagrCalculator';
import Compoundr from './components/Compoundr/Compoundr';
import WithdrawalCalculator from './components/WithdrawalCalculator/WithdrawalCalculator'

export default () => (
  <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/cagr-calculator' component={CagrCalculator} />
        <Route path='/Compound-interest-calculator' component={Compoundr} />
        <Route path='/withdrawal-calculator' component={WithdrawalCalculator} />
  </Layout>
);
