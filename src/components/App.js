import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import Albums from './Albums';
import Sidebar from './Sidebar';
import rootSaga from '../sagas';

export default class App extends Component {
  render() {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
    return (
      <Provider store={store}>
        <div className='row'>
         <div className="col s4"><Sidebar /></div>
          <div className="col s8"><Albums /></div>
        </div>
      </Provider>
    );
  }
}
