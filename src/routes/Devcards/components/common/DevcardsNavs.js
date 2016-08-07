import React, { Component, PropTypes } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const BASE_DEVCARDS_URL = '/devcards';

class DevcardsNavs extends Component {
  static propTypes = {
    routes: PropTypes.array.isRequired,
  };

  getRoutes(routes = this.props.routes, baseUrl = BASE_DEVCARDS_URL, list = [], level = 0) {
    for (const { path, childRoutes } of routes) {
      const leaf = !childRoutes || childRoutes.length === 0;
      const url = `${baseUrl}/${path}`;
      list.push({ leaf, url, level });
      if (!leaf) {
        this.getRoutes(childRoutes, url, list, level + 1);
      }
    }
    return list;
  }

  render() {
    return (
      <ListGroup>
        {this.getRoutes().map(({ leaf, url }) => (
          leaf ? (
            <LinkContainer key={url} to={url}>
              <ListGroupItem>
                {url.slice(BASE_DEVCARDS_URL.length)}
              </ListGroupItem>
            </LinkContainer>
          ) : (
            <ListGroupItem key={url} disabled>
              {url.slice(BASE_DEVCARDS_URL.length)}
            </ListGroupItem>
          )
        ))}
      </ListGroup>
    );
  }
}

export default DevcardsNavs;
