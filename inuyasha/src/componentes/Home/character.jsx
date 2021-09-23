import React from "react"
import Inuyasha from "../../../src/img/Inuyasha.png"

export default class Character extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return (
            <div>
             <h1>{this.props.name}</h1> 
             <img src={this.props.photo} alt="nada"/>

            </div>
            
        )
    }
}

{/*<img src={Inuyasha} alt="nada" />
<p>{this.props.Data.Characters[0].photo}</p>*/}