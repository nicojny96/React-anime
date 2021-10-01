import React ,{useState,useEffect} from "react";
import Inuyasha from "../../../src/data.json"
import { useParams } from "react-router";

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
          <div>
          <h3>{state.currentElement.name }</h3>
          <div>
            <img src={state.currentElement.photo}></img>
          </div>
          <h3> Character Details</h3>
          <p> Edad: {state.currentElement.age + " años"}</p>
          <p> Frese favorita: {state.currentElement.bestPhrase}</p>
          <p> Amigos: </p>
          {state.currentElement.Friends.map((amigo) => (
              <u1>
                  <li>{amigo}</li>
              </u1>
          ))}
          <p> Ciudad: {state.currentElement.City}</p>
        </div>
      </div>
    );
  } else{


    return (

      <div>
        {console.log(parametros)}
        {console.log(state.currentElement)}
        <div>
          <h3>{state.currentElement.name }</h3>
          <h3> Character Details</h3>
          <p> Edad: {state.currentElement.age + " años"}</p>
          <p> Frese favorita: {state.currentElement.bestPhrase}</p>
          <p> Amigos: </p>
          {state.currentElement.Friends.map((amigo) => (
              <u1>
                  <li>{amigo}</li>
              </u1>
          ))}
          <p> Ciudad: {state.currentElement.City}</p>
        </div>
      </div>
    );
      
  }
  
}