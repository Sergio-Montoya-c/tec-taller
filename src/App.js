import React, {Component} from 'react';
import ItemsList from './components/ItemsList';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }

  componentDidMount = () => {
    axios.get('https://fortnite-api.theapinetwork.com/store/get')
      .then(response => {
        this.setState({
          items: response.data.data,
        })
      });
  }


  render() {
    const {items} = this.state;
    return (
      <Router>
        <h1>WELCOME TO THE FORNITE APP!</h1>
        <ol>
          <li><Link to="/">Home</Link></li>  
          <li><Link to="/items">See today items</Link></li>  
        </ol>
        <Switch>
          <Route path="/items">
            <ItemsList items={items} />
          </Route>
          <Route path="/">
            <h2>LANDING</h2>
          </Route>
        </Switch>
      </Router>
    )
  }
}


export default App;
