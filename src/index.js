import axios from 'axios'
import AppContextProvider from './context/AppContext';
// scroll bar
import 'simplebar/src/simplebar.css';
import 'mapbox-gl/dist/mapbox-gl.css'

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8000/api/v1'
// axios.defaults.baseURL = 'https://gesundo24.herokuapp.com/api/v1'
// ----------------------------------------------------------------------

ReactDOM.render(
  <BrowserRouter>
    <AppContextProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </AppContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to enable client cache, register instead.
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
