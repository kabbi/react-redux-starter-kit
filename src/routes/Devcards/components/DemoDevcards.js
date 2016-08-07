import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Code from './common/Code';
import Devcard from './common/Devcard';
import PropTypesDevcard from './common/PropTypesDevcard';
import Button from './showcase/Button';
const ButtonCode = require('!!raw!./showcase/Button');

const DemoDevcards = () => (
  <div>
    <Devcard id="demo/warning">
      This is an example devcards page, showcasing the simple 'button' component.
      <br />
      You can develop markup, show docs and test your visual components here.
    </Devcard>

    <Devcard id="demo/code">
      You can attach some source code:
      <Code code={ButtonCode} />
    </Devcard>

    <PropTypesDevcard
      id="demo/props"
      props={[
        ['disabled', 'bool', 'Cannot be clicked when disabled'],
        ['loading', 'bool', 'Cannot be clicked when loading'],
        ['onClick', 'function', (
          <span>
            Callback that will be invoked when someone clicks.
            <br />
            Also, you can render some markup here, like <code>highlights</code>, etc.
          </span>
        )],
      ]}
    >
      Show some prop types:
    </PropTypesDevcard>

    <Devcard id="demo/states">
      And display some component states:
      <Row className="text-center">
        <Col md={4}>
          <Button disabled>Click me!</Button>
        </Col>
        <Col md={4}>
          <Button
            onClick={() => {
              // eslint-disable-next-line no-alert
              alert('Seems to work');
            }}
          >
            Click me!
          </Button>
        </Col>
        <Col md={4}>
          <Button loading>Click me!</Button>
        </Col>
      </Row>
    </Devcard>
  </div>
);

export const RouteMetadata = {
  path: 'demo',
  component: DemoDevcards,
};

export default DemoDevcards;
