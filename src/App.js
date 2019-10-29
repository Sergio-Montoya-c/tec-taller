import React, {Component} from 'react';
import ItemsList from './components/ItemsList';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }


  render() {
    const {items} = this.state;
    return (
      <div>
        <h1>FORTNITE ITEMS LIST</h1>
        <ItemsList items={items} />
      </div>
    )
  }
}


export default App;
