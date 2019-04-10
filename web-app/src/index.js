import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import firebase from "firebase";

import "@fortawesome/fontawesome-free/css/all.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

var config = {
    apiKey: "AIzaSyBNxBFCXE1u6TToiIdELmB_UKeinvxqO8k",
    authDomain: "baseblock-cd315.firebaseapp.com",
    databaseURL: "https://baseblock-cd315.firebaseio.com",
    projectId: "baseblock-cd315",
    storageBucket: "baseblock-cd315.appspot.com",
    messagingSenderId: "940117939837"
};

firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));


// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();
