import React from 'react';
import 'bootstrap-loader';

import Header from 'components/Header';

import classes from './CoreLayout.scss';
import 'styles/core.scss';

export const CoreLayout = ({ children }) => (
  <div className="container">
    <div className="text-center">
      <Header />
    </div>
    <div className={classes.mainContainer}>
      {children}
    </div>
  </div>
);

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default CoreLayout;
