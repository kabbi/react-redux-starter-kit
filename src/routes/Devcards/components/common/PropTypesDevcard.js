import React, { PropTypes } from 'react';
import { Label } from 'react-bootstrap';

import Devcard from './Devcard';

const PropTypesDevcard = ({ id, props, children }) => {
  const descriptions = [];
  for (const [prop, type, description] of props) {
    descriptions.push(
      <dt key={`propName-${prop}`}>{prop}</dt>
    );
    descriptions.push(
      <dd key={`propDoc-${prop}`}>
        <Label>{type}</Label>&nbsp;
        {description || (
          <span className="text-error">
            Too bad, no docs for this prop
          </span>
        )}
      </dd>
    );
  }
  return (
    <Devcard id={id}>
      {children}
      <dl className="dl-horizontal">
        {descriptions}
      </dl>
    </Devcard>
  );
};

PropTypesDevcard.propTypes = {
  id: PropTypes.string.isRequired,
  props: PropTypes.array.isRequired,
  children: PropTypes.node,
};

export default PropTypesDevcard;
