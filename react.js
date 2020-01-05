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
//building a react app

import React from 'react';
import logo from './logo.svg';
import './App.css';
//we can change the fnction into a class
//the function 
function App(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
//becomes
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
 
export default App;

