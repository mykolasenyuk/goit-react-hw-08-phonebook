import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App';
import App from './App';
import { store, persistor } from './redux/store';
// import { myAction } from './redux/actions';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root'),
);
