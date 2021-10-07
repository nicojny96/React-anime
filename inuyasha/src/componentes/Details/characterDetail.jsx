import React ,{useState,useEffect} from "react";
import { useParams } from "react-router";
import { Card, Image, Row, Container as Contenedor } from "react-bootstrap";
import "./characterDetail"


export default function CharacterDetail(props){

  const parametros = useParams();

  const [state,setState] = useState(
    {currentElement: props.personajes[0]},
    )

  useEffect(() => {

    if ( Object.keys(parametros).length === 0 ){
      setState({...state, currentElement:props.personajes[0]})
    }
    else{
      setState({...state, currentElement:props.personajes.find(
        (element) => element.id == parametros.id
      ),})
    }
   
  },[parametros])
   


  function onChangeInput(event){
            setState(() => {
              return {
                currentElement: props.personajes.find(
                  (element) => element.id == event.target.value
                ),
              };
            });
  }

 
  if(( Object.keys(parametros).length === 0 )){
    return (
      <div>
          <select
            className="form-select mb-5 mx-auto"
            style={{ width: "50rem" }}
            name="personajes"
            onChange={(event) => {
              onChangeInput(event);
            }}    
          >
          {props.personajes.map((element) => (
              <option value={element.id} selected={element.id === state.currentElement.id}>
                {element.name}
              </option>
            ))}
          </select>

        <Row>
          <div className="col-4">
            <Image
              src={state.currentElement.photo}
              alt="imagen"
              rounded
              style={{ height: "17rem", width: "15rem" }}
            />
          </div>
        

          <div className="col-8">

            <Card className="text-white bg-primary">
              <Card.Header className="fs-4">{`${state.currentElement.name}`}</Card.Header>
              <Card.Body>
                <Card.Text>
                  {`tiene ${state.currentElement.age} años, vive en ${state.currentElement.City} y su frase
                  favorita es: "${state.currentElement.bestPhrase}"`}
                </Card.Text>
                <Card.Title> Sus amigos son:</Card.Title>
                <Card.Text>
                {state.currentElement.Friends.map((amigo) => (
                    <u1>
                        <li>{amigo}</li>
                    </u1>
                ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </div>
    );
  } else{
    
    return (
     
        <div  style={{display:"flex", justifyContent: "center"}}>
          <div className="col-8">
          
            <Card className="text-white bg-primary">
              <Card.Header className="fs-4">{`${state.currentElement.name}`}</Card.Header>
              <Card.Body>
                <Card.Text>
                  {`tiene ${state.currentElement.age} años, vive en ${state.currentElement.City} y su frase
                  favorita es: "${state.currentElement.bestPhrase}"`}
                </Card.Text>
                <Card.Title> Sus amigos son:</Card.Title>
                <Card.Text>
                {state.currentElement.Friends.map((amigo) => (
                    <u1>
                        <li>{amigo}</li>
                    </u1>
                ))}
                </Card.Text>
              </Card.Body>
            </Card>
            </div>
          </div>
    );
      
  }
  
}