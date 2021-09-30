import React ,{useState,useEffect} from "react";
import Inuyasha from "../../../src/data.json"
import { useParams } from "react-router";

export default function CharacterDetail(){

  const parametros = useParams();
 
  const [state,setState] = useState(
    {currentElement: ( Object.keys(parametros).length === 0 )? Inuyasha.Characters[0]: Inuyasha.Characters.find(
      (element) => element.id == parametros.id
    ),},
    )

  useEffect(() => {

    if ( Object.keys(parametros).length === 0 ){
      setState({...state, currentElement:Inuyasha.Characters[0]})
    }
    else{
      setState({...state, currentElement:Inuyasha.Characters.find(
        (element) => element.id == parametros.id
      ),})
    }
   
  },[parametros])
   


  function onChangeInput(event){
            setState(() => {
              return {
                currentElement: Inuyasha.Characters.find(
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
         {Inuyasha.Characters.map((element) => (
            <option value={element.id}>
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