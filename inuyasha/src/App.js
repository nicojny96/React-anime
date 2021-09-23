
import './App.css';
import React from 'react';
import NavBar from './componentes/NavBar/navBar';
import Home from './componentes/Home/home';
import CharacterDetail from './componentes/Details/characterDetail'

export default class App extends React.Component {
  constructor(){
    super() 
  }

  render(){
    return (
      <div>
        <NavBar/>
        <Home />
       <CharacterDetail/>
      </div>
    );
  }
}  
