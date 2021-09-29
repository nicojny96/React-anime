import React,{useState} from "react"
import Inuyasha from "../../../src/img/Inuyasha.png"

export default function Character(props){

        const [name,setSanme] = useState(props.name);
        const [photo,setPhoto] = useState(props.photo);

        /*como un objeto*/
        /*const[state,setState] = useState({
            name : props.name,
            photo: props.photo
        })*/

        return (
            <div>
             <h1>{name}</h1> 
             <img src={photo} alt="nada"/>
            </div>
       
        )
    
}

