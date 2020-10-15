import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './redux/store/configurestore'
import './styles/index.css';
import './styles/todo-list.css';
import './styles/filters.css';

import App from './App';

const app = (
  <Provider store={store}> 
    <App/>
  </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root'),
);
