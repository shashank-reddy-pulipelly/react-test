import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Route, BrowserRouter,Redirect } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Click from './components/Click';
import Hover from './components/Hover';
class App extends Component {
  
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path='/' component={Contact} />
          <Route  path='/home' component={Home}/>
          <Route path='/about' component={About} />
     
        </div>
        <div>
          <Click />
          <Hover />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;