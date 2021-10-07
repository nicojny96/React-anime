import React from "react"
import Character from "./character"
import { Row, Col, Container } from "react-bootstrap";

export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.personajes = {};
    }

    render(){
        return (
            <Container>
                <Row xs={1} md={2} xl={4} className="g-4" >
                {this.props.personajes.slice(0, 10).map((personaje, index) => {
                    return (
                    <Col key={index} >
                        <Character
                        name={personaje.name} 
                        photo={personaje.photo}
                        id={personaje.id}
                        />
                    </Col>
                    );
                })}
                </Row>
            </Container>

            
            // <div>
            // {this.props.personajes.slice(0, 10).map((personaje) => {
            // return <Character name={personaje.name}   photo={personaje.photo} id={personaje.id}/>
            // })}
            // </div>
            
        );
    }
}