
import './App.css';
import React,{useState} from 'react';
import NavBar from './componentes/NavBar/navBar';
import Home from './componentes/Home/home';
import CharacterDetail from './componentes/Details/characterDetail'
import About from './componentes/About/about';
import { useEffect } from 'react';
import Data from "./data.json"

export default function App() {
    const [state,setState] = useState({
      charactersInfo: []
    });
  useEffect(() => {
    //console.log("El componente se monto en el DOM")
    //console.log(Data.Characters)
    setState ({...state,charactersInfo :Data.Characters})
  },state)
 
    return (
      <div>
       <NavBar/>
       <Home />
       <CharacterDetail/>
       <About/>
      </div>
    );
  
}  
