import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./sass/main.scss"
import "primereact/resources/themes/md-dark-indigo/theme.css"  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css"; 
import { Provider } from 'react-redux'; 
import {store,persistor} from "./redux/store"
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>
);

