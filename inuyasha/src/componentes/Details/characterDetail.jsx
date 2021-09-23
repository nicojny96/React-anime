import React from "react";
import Inuyasha from "../../../src/data.json"

export default class CharacterDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      currentElement: Inuyasha.Characters[0],
    };
  }
  onChangeInput = (event) => {
    this.setState(() => {
      return {
        currentElement: Inuyasha.Characters.find(
          (element) => element.id == event.target.value
        ),
      };
    });
  };

  render() {
    return (
      <div >
        <select
          onChange={(event) => {
            this.onChangeInput(event);
          }}
        >
         {Inuyasha.Characters.map((element) => (
            <option value={element.id}>
              {element.name}
            </option>
          ))}
        </select>
          {console.log(this.state.currentElement)}
          <div>
          <h3>{this.state.currentElement.name }</h3>
          <div>
            <img src={this.state.currentElement.photo}></img>
          </div>
          <h3> Character Details</h3>
          <p> Edad: {this.state.currentElement.age + " años"}</p>
          <p> Frese favorita: {this.state.currentElement.bestPhrase}</p>
          <p> Amigos: </p>
          {this.state.currentElement.Friends.map((amigo) => (
              <u1>
                  <li>{amigo}</li>
              </u1>
          ))}
          <p> Ciudad: {this.state.currentElement.City}</p>
        </div>
      </div>
    );
  }
}