import React from "react"
import {Link} from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";


export default class NavBar extends React.Component{
    constructor(props){
        super(props)
       
    }

    render(){
        return (
            <Navbar className="mb-4" bg="primary" variant="dark">
              <Container>
              <Link className="navbar-brand" to="/">Inuyasha</Link>
              <Nav>
                <Link className="nav-link" to="/charDetail">CharacterDetail</Link>
                <Link className="nav-link" to="/About">About</Link> 
              </Nav>
              </Container>         
            </Navbar>
            
        )
    }
}