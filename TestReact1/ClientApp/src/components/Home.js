import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'reactstrap';

const Home = props => (
  <div>
    <h1>Welcome in Compoundr</h1>
        <p>We're trying to provide you with the right financial tools, that simplify how you calculate:</p>
        <ul>
            <li><NavLink href="/compoundr">Calculate the Compound Interest</NavLink></li>
            <li><NavLink href="/cagrInterest">Calculate CAGR</NavLink></li>
        </ul>
  </div>
);

export default connect()(Home);
