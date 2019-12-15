import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [
        {
          name: "Drakula",
          id: 'asci1'
        },
        {
          name: "Bhootnath",
          id: 'asci2'
        },
        {
          name: "Khilona Khalnayak",
          id: 'asci3'
        }
      ]
    }
  }
  render(){
    return(
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
          <p/>{
            this.state.monsters.map((mons)=>{
              return <h1 key= {mons.id}> {mons.name} </h1>
            })
          }<p/>
        </a>
        <button onClick={()=>{
            this.setState({strin1: "hello"}
            )}
          }>
            Click
          </button>
      </header>
    </div>
    );
  }
}

export default App;
