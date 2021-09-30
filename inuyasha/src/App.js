
import './App.css';
import React,{useState} from 'react';
import NavBar from './componentes/NavBar/navBar';
import Home from './componentes/Home/home';
import CharacterDetail from './componentes/Details/characterDetail'
import About from './componentes/About/about';
import {useEffect} from 'react';
import Data from "./data.json"
import {Switch,Route} from "react-router-dom";

export default function App() {
  
    const [characterInfo,setCharacterInfo] = useState([])

  useEffect(() => {
    setCharacterInfo (Data.Characters)
  },[])
 
    return (
      <div> 
        <NavBar/>
        <Switch> 
          <Route exact path="/">
            <Home personajes = {characterInfo}/>
          </Route>
          <Route exact path="/charDetail">
            <CharacterDetail />
          </Route>
          <Route  path="/charDetail/:id">
            <CharacterDetail />
          </Route>
          <Route path="/About">
           <About/>
          </Route>
        
        </Switch> 
        
      </div>
    );
  
}  
