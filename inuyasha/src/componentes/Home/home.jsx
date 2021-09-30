import React from "react"
import Character from "./character"


export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.personajes = {};
    }

    render(){
        return (
            
            <div>
            {this.props.personajes.slice(0, 10).map((personaje) => {
            return <Character name={personaje.name}   photo={personaje.photo} id={personaje.id}/>
            })}
            </div>
            
        );
    }
}