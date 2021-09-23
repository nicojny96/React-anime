import React from "react"
import Character from "./character"
import Inuyasha from "../../../src/data.json"

export default class Home extends React.Component{
    constructor(props){
        super(props)
       
    }

    render(){
        return (
            
            <div>
            {Inuyasha.Characters.slice(0, 5).map((personaje) => {
            return <Character name={personaje.name} photo={personaje.photo}/>
            })}
            </div>
            
        );
    }
}