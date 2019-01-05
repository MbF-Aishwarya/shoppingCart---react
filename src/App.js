import React, { Component } from 'react';
import './App.css';
import  Shelf from "./components/Shelf";

class App extends Component {
 
  
  render() {
  
    return(
      <div className="container">
        <div className="main">
          <Shelf />
          <h1>Hello</h1>
        </div>
      </div>
    )
  }
}




export default App;
