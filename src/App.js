import { Component } from 'react';
//import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
//import Menu from './components/MenuComponent';
//import { DISHES } from './shared/dishes';
import { BrowserRouter } from 'react-router-dom';


import Main from './components/MainComponent';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
