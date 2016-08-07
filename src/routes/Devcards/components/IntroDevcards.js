import { PageHeader } from 'react-bootstrap';
import { Link } from 'react-router';
import React from 'react';

import Devcard from './common/Devcard';

const IntroDevcards = () => (
  <div>
    <Devcard id="intro">
      <PageHeader>Welcome, to the world of Tomorrow!</PageHeader>
      You can now use this space (<code>/devcards</code> one) to put all your
      development state of your dreams.<br />
      Tests, docs, components playground, usage examples, styleguides, performance
      benchmarks, anything you want comes here.
      <br />
      <Link to="/devcards/demo" className="btn btn-link">
        See some examples
      </Link>
    </Devcard>
  </div>
);

export const RouteMetadata = {
  path: 'intro',
  component: IntroDevcards,
};

export default IntroDevcards;
