import React from "react"
import {Link,NavLink} from "react-router-dom";


export default class NavBar extends React.Component{
    constructor(props){
        super(props)
       
    }

    render(){
        return (
            <nav>
              <Link to="/">Inuyasha</Link>
              <Link to="/charDetail">CharacterDetail</Link>
              <Link to="/About">About</Link>          
            </nav>
            
        )
    }
}