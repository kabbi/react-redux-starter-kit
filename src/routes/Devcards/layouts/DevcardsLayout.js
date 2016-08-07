import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import DevcardsNavs from '../components/common/DevcardsNavs';

import classes from './DevcardsLayout.css';

const DevcardsLayout = ({ route: { childRoutes }, children }) => (
  <Grid className={classes.container}>
    <Row>
      <Col md={3}>
        <DevcardsNavs routes={childRoutes} />
      </Col>
      <Col md={9}>
        {children}
      </Col>
    </Row>
  </Grid>
);

DevcardsLayout.propTypes = {
  route: PropTypes.object.isRequired,
  children: PropTypes.element,
};

export default DevcardsLayout;
