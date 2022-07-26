import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { rootReducer } from './redux/rootReducer';
import {Provider} from 'react-redux'
import {compose, createStore } from 'redux'


const store = createStore(rootReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);



