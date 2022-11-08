import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import { Button } from 'react-bootstrap';
import {Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label, Form} from 'reactstrap'
import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'





function Clientes() {

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    
    const [ID, setID] = useState(0);
  const [clientname, setclientname] = useState('');
  const [age, setage] = useState(0);
  const [email, setemail] = useState('');
  const [clientaddress, setclientaddress] = useState('');
  const [indentificationcard, setindentificationcard] = useState(0);
  const [telephone, settelephone] = useState(0);

  const baseUrl = "https://localhost:7267/api/Clients"
  const comosea=()=>{
    nose(`/ClienteID/${ID}`)
  }
  const nose = useNavigate();
  const [data,setData]=useState([]);
  const petitionget =async ()=>{
    await axios.get(baseUrl).then(response => {
      setData(response.data);
      console.log(data)
    }).catch(error=>{
        console.log(error)
    })
  }


  const handle1 = () => {
    setShow1(!show1);
  }
  const handle2 = () => {
    setShow2(!show2);
  }
  const modalStyles={
    /*  position:'absolute',
      top:'50%',
      left:'50%',
      transform: 'translate(-50%,-50%)'*/
  }
  const createclient = async (e)=>{
    e.preventDefault()
   
       await axios.post(baseUrl, {
              "clientname": clientname,
              "telephone": telephone,
              "email": email,
              "age": age,
              "clientaddress": clientaddress,
              "indentificationcard": indentificationcard
              
           });
         handle1();
    
  }

  useEffect(()=>{
    petitionget();
  },[])

  return (
    <div className="Cliente">
    
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Telefono</th>
            <th>Email</th>
            <th>Edad</th>
            <th>Direccion</th>
            <th>Cedula</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item=>(
            <tr key={item.idclient}>
              <td>{item.idclient}</td>
              <td>{item.clientname}</td>
              <td>{item.telephone}</td>
              <td>{item.email}</td>
              <td>{item.age}</td>
              <td>{item.clientaddress}</td>
              <td>{item.indentificationcard}</td>
              
            </tr>
          ))}

        </tbody>
      </table>
      <button onClick={()=>{handle1()}}  className="btn btn-primary">Añadir cliente</button>
      <Modal isOpen={show1} style={modalStyles}>
        

        <ModalHeader toggle={handle1}>
           REGISTRAR CLIENTE
        </ModalHeader>
        <ModalBody>
          <Form className="form" onSubmit={(e) => createclient(e)}>
            <FormGroup>
              <Label for="clientname">Nombre</Label>
              <Input type='text' id='clientname' value={clientname}  
               maxLength='100' onChange={(e)=>(setclientname(e.target.value))} required>
              </Input>
            </FormGroup>
            <FormGroup>
             <Label for="telephone">telefono </Label>
             <Input type="number" id="telephone" value={telephone} min="0" maxLength="1000" onChange={(e)=>settelephone(e.target.value)} required></Input>
            </FormGroup>
            <FormGroup>
            <Label for="email">email</Label>
             <Input type='text' id='email' value={email} maxLength="100" onChange={(e)=>setemail(e.target.value)} required></Input>
            </FormGroup>
            <FormGroup>
            <Label for="age">edad</Label>
             <Input type='number' id='age' value={age} min="0" maxLength="1000" onChange={(e)=>setage(e.target.value)}></Input>
            </FormGroup>
            <FormGroup>
            <Label for="clientaddress">direccion</Label>
             <Input type='text' id='clientaddress' value={clientaddress} maxLength="100" onChange={(e)=>setclientaddress(e.target.value)}></Input>
            </FormGroup>
           
            <FormGroup>
            <Label for="indentificationcard">cedula</Label>
             <Input type='number' id='indentificationcard' value={indentificationcard} min="0" maxLength="9999999999" onChange={(e)=>setindentificationcard(e.target.value)}></Input>
            </FormGroup>
            <Button variant="success" type="submit">Registrar</Button>{' '}
            <Button variant="danger" onClick={handle1}>Cerrar</Button>
          </Form>
        </ModalBody>
        <ModalFooter>
             
        </ModalFooter>
        
     </Modal>
     <button onClick={()=>handle2()}  className="btn btn-primary">Buscar por id</button>
     <Modal isOpen={show2} style={modalStyles}>
        

        <ModalHeader toggle={handle2}>
           Buscar Cliente
        </ModalHeader>
        <ModalBody>
          <Form className="form" onSubmit={comosea}>
            <FormGroup>
              <Label for="ID">ID</Label>
              <Input type='number' id='ID' value={ID}  min="0"
               maxLength='100' onChange={(e)=>(setID(e.target.value))} required>
              </Input>
            </FormGroup>
            <Button variant="success" type="submit">Buscar</Button>{'  '}
            <Button variant="danger" onClick={handle2}>Cerrar</Button>
          </Form>
        </ModalBody>
        <ModalFooter>
             
        </ModalFooter>
     </Modal>
        

    </div>
  );
  }

  export default Clientes;