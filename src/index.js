import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import App from './components/App.js';
import CustomerList from './containers/CustomerList';

const customers = [
  {
    name: 'Some track'
  },
  {
    name: 'Some other track'
  }
];

const store = configureStore();
store.dispatch(actions.setCustomers(customers));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={CustomerList} />
          <Route path="/" component={CustomerList} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
);