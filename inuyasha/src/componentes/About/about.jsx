import React from "react";
import { Badge,Form,Button } from "react-bootstrap";
import { useState } from "react";


function validacion(input){   
          let errores = []

            if(!input.email){
              errores.email = "Email is required"
            }else if (!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(input.email)){
              errores.email = "Email must be an email" 
            }

            if(!input.asunto){
              errores.asunto = "Asunto is required"
            }else if (String(input.asunto).length <10){
              errores.asunto = "the subject requires a minimum of 10 characters"
            }

            if(!input.mensaje){
              errores.mensaje = "Mensaje is required"
            }else if (String(input.mensaje).length > 256){
              errores.mensaje = "the subject requires a maximum of 256 characters"
            }
          return errores;
}

export default function About() {

  const [state,setState] = useState ({
    email: "",
    asunto: "",
    mensaje:""
  })

  const[fails,setFails] = useState({
    email:"Email is required",
    asunto:"Asunto is required",
    mensaje:"Mensaje is required"
  })

  function onsubmitform(e){
        e.preventDefault();
        alert(`el correo es ${state.email}, el asunto es ${state.asunto}, el mensaje es ${state.mensaje}`)
  }

  function onHandleChange(e){
        setState({
          ...state,
          [e.target.name] : e.target.value
        })

        setFails(
          validacion({
            ...state, 
            [e.target.name] : e.target.value})
            )

  }


  return (
    <div >

      {console.log(fails)}
    <Form style={{textAlign:"left"}}  onSubmit={(e) => onsubmitform(e)}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
          type="email" 
          name="email"
          placeholder="name@example.com" 
          value={state.email} 
          onChange={(e) => onHandleChange(e)}/>
          {fails.email ? <p style={{color:"red"}}>{fails.email}</p> : <p style={{color:"green"}}>Correcto</p>} 
        </Form.Group>

        <Form.Group className="mb-3" controlId="Asunto">
          <Form.Label>Asunto</Form.Label>
          <Form.Control 
          type="text" 
          name="asunto"
          placeholder="Asunto" 
          value={state.asunto} 
          onChange={(e) => onHandleChange(e)}/>
          {fails.asunto ? <p style={{color:"red"}}>{fails.asunto}</p> : <p style={{color:"green"}}>Correcto</p>} 
        </Form.Group>



        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Mensaje</Form.Label>
          
          <Form.Control 
          as="textarea" 
          name="mensaje"
          rows={3} 
          style={{ height: '15rem' }} 
          value={state.mensaje} 
          onChange={(e) => onHandleChange(e)}/>
          {fails.mensaje ? <p style={{color:"red"}}>{fails.mensaje}</p> : <p style={{color:"green"}}>Correcto</p>}
        </Form.Group>
 
        <Button variant="primary" type="submit" style={{marginBottom:"3rem"}}  disabled={fails.email || fails.asunto || fails.mensaje ? true : false}>
            Enviar
        </Button>
    </Form>

      <p>
        <h2>
            <Badge>Jorge Nicolas Yañez</Badge>
        </h2>
      </p>

      <p>Pais: Argentina</p> 
      <p>Ciudad: San Salvador de Jujuy</p> 
      <p>Email: nicojny96@gmail.com</p>
      <p>Linkedin: Nicolas Yañez</p>
      <p>Estudiante de Ingenieria Informatica en Fi-Unju</p> 
    </div>
  );
}


// export default function About(){

//         return (
//             <div>
//             <h1>Acerca de mi</h1>
//              <p>Nombre del autor: Jorge Nicolas Yañez</p> 
//              <p>Pais: Argentina</p> 
//              <p>Ciudad: San Salvador de Jujuy</p> 
//              <p>Email: nicojny96@gmail.com</p> 
//              <p>Estudiante de Ingenieria Informatica en Fi-Unju</p> 
//             </div>
            
//         )
    
// }