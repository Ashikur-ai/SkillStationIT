import React from 'react';
import { Helmet } from 'react-helmet-async';

import Banner from './Banner';

const Homepage = () => {
  return (
    <div>
      <Helmet>
        <title>Skill Station</title>
      </Helmet>
      <Banner></Banner>
      

    </div>
  );
};

export default Homepage;