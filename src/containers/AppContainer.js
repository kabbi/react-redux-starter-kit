import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

// Use a regular component here to allow some hot-reloading
// eslint-disable-next-line react/prefer-stateless-function
class AppContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
  }

  render() {
    const { history, routes, store } = this.props;

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <Router history={history} children={routes} />
        </div>
      </Provider>
    );
  }
}

export default AppContainer;
