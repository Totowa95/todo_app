import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';
import {Provider} from 'react-redux'

import './styles/index.css';
import './styles/todo-list.css';
import './styles/filters.css';

import App from './App';

const store = createStore(rootReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
));

const app = (
  <Provider store={store}> 
    <App/>
  </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root'),
);
