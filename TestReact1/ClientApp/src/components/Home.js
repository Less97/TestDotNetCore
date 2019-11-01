import React from 'react';
import { connect } from 'react-redux';

const Home = props => (
  <div>
    <h1>Welcome in Compoundr</h1>
        <p>We're trying to provide you with the right financial tools, that simplify how you calculate:</p>
        <ul>
            <li to="/compoundr">Compoundr</li>
        </ul>
  </div>
);

export default connect()(Home);
