import { Component } from 'react';
//import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
//import Menu from './components/MenuComponent';
//import { DISHES } from './shared/dishes';


import Main from './components/MainComponent';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
