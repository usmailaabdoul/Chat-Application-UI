import React, { useEffect } from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from "react-redux";
import thunk from 'redux-thunk';

import reducers from './redux/reducers';

import Navigation from './navigation/navigation';

const store = createStore(reducers, applyMiddleware(thunk));

const App = () => {
  // useEffect(() => {
  //   let t = sessionStorage.getItem('Token');

  //   console.log({ t })
  // }, [])
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App;
