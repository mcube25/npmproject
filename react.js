1. create-react-app
2.npm install -g create-react-app
//after installing react yo create d project
e.g create-react-app robofriends
cd robofriends
npm start
//on d text editor

//src file looks like this
import React from 'react'
import ReactDom from 'react-dom'
import './index.css';
import App from './app'
import registerServiceWorker from 'registerServiceWorker';
ReactDOM.render(<App/>document.getElementById('root'));
registerServiceWorker();

*/