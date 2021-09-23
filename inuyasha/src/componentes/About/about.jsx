import React from "react"

export default class About extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return (
            <div>
            <h1>Acerca de mi</h1>
             <p>Nombre del autor: Jorge Nicolas Yañez</p> 
             <p>Pais: Argentina</p> 
             <p>Ciudad: San Salvador de Jujuy</p> 
             <p>Email: nicojny96@gmail.com</p> 
             <p>Estudiante de Ingenieria Informatica en Fi-Unju</p> 
            </div>
            
        )
    }
}