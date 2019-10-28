import React, {Component} from 'react';
import ItemsList from './components/ItemsList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>FORTNITE ITEMS LIST</h1>
        <ItemsList />      
      </div>
    )
  }
}


export default App;
