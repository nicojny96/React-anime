import React from "react"


export default class NavBar extends React.Component{
    constructor(props){
        super(props)
       
    }

    render(){
        return (
            <div>
               <a href="#">Inuyasha</a>
               <a href="#">Character Detail</a>
               <a href="#">About</a>             
            </div>
            
        )
    }
}