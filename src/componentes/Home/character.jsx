import React,{useState} from "react"
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./cards.css";

export default function Character(props){

        const [name,setSanme] = useState(props.name);
        const [photo,setPhoto] = useState(props.photo);
        const [id,setId] = useState(props.id);
        return (

            <Card style={{ width: "18rem" }} bg = "primary" >
            <Link className="carta-link" to={`/charDetail/${id}`}>
              <Card.Img
                style={{ height: "15rem", width: "15rem" }}
                className="m-2"
                variant="top"
                src={photo}
                alt="Foto"
                bg = "primary"
              />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
              </Card.Body>
            </Link>
          </Card>


            // <div>
            //  <h1>{name}</h1> 
            //  <Link to={`/charDetail/${id}`} ><img src={photo} alt="nada"/></Link>
            // </div>
       
        )
    
}

