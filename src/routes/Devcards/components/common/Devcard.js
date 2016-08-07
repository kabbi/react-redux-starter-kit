import React, { PropTypes } from 'react';
import { Label, Panel } from 'react-bootstrap';

const Devcard = ({ id, children }) => (
  <Panel>
    <div>
      <Label className="pull-right" bsStyle="default">{id}</Label>
      &nbsp;
    </div>
    {children}
  </Panel>
);

Devcard.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Devcard;
