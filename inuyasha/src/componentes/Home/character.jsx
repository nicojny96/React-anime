import React,{useState} from "react"
import Inuyasha from "../../../src/img/Inuyasha.png"
import { Link } from "react-router-dom";

export default function Character(props){

        const [name,setSanme] = useState(props.name);
        const [photo,setPhoto] = useState(props.photo);
        const [id,setId] = useState(props.id);

        /*como un objeto*/
        /*const[state,setState] = useState({
            name : props.name,
            photo: props.photo
        })*/

        return (
            <div>
             <h1>{name}</h1> 
             <Link to={`/charDetail/${id}`} ><img src={photo} alt="nada"/></Link>
            </div>
       
        )
    
}

