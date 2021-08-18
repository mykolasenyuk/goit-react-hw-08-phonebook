import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App';
import App from './App';
import store from './redux/store';
// import { myAction } from './redux/actions';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root'),
);
