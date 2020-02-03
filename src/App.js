import React from 'react';
import Header from './components/Header';
import './styles.css';
import Routes from './routes';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;

/*
op.1 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>we are on</h1>
      </header>
    </div>
  );
}

export default App;
*/

/*
op. 2
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>we are on</h1>
      </div>
    )
  }
}

export default App;

*/