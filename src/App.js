import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import reducers from './redux/reducers';

import { Home } from './pages';
// import { BrowserRouter as Router, Route} from 'react-router-dom';

import Join from './components/join/Join';

const store = createStore(reducers, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/home" component={Home} />
    </Router>
  </Provider>
)

export default App;
