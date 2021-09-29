import React ,{useState} from "react";
import Inuyasha from "../../../src/data.json"

export default function CharacterDetail(){
 
  const [state,setState] = useState({
    currentElement: Inuyasha.Characters[0],
  })

  function onChangeInput(event){
            setState(() => {
              return {
                currentElement: Inuyasha.Characters.find(
                  (element) => element.id == event.target.value
                ),
              };
            });
  }
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
          {console.log(state.currentElement.name)}
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

}