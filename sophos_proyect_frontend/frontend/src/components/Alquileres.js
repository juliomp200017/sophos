import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import { Button } from 'react-bootstrap';
import {Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label, Form} from 'reactstrap'
import React, {useState, useEffect} from 'react';





function Alquileres() {
    const [show, setShow] = useState(false);
  const [idclient, setidclient] = useState(0);
  const [idgame, setidgame] = useState(0);
  const [rentaldate, setrentaldate] = useState('');
  const [rentaldelivery, setrentaldelivery] = useState('');
  const [price, setprice] = useState(0);
 

  const baseUrl = "https://localhost:7267/api/Rentals"


  const [data,setData]=useState([]);
  const petitionget =async ()=>{
    await axios.get(baseUrl).then(response => {
      setData(response.data);
      console.log(data)
    }).catch(error=>{
        console.log(error)
    })
  }


  const handle = () => {
    setShow(!show);
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
              "idclient": idclient,
              "idgame": idgame,
              "rentaldate": rentaldate,
              "rentaldelivery": rentaldelivery,
              "price": price
              
              
           });
         handle();
    
  }

  useEffect(()=>{
    petitionget();
  },[])

  return (
    <div className="Cliente">
    
      <table className='table table-bordered'>
        <thead>
          <tr>
         
            <th>ID </th>
            <th>ID Cliente</th>
            <th>ID JUEGO</th>
            <th>Fecha de Alquiler</th>
            <th>Fecha devolucion</th>

            <th>price</th>
          </tr>
        </thead>
        <tbody>
       
          {data.map(item=>(
            <tr key={item.idrental}>
              <td>{item.idrental}</td>
              <td>{item.idclient}</td>
              <td>{item.idgame}</td>
              <td>{item.rentaldate}</td>
              <td>{item.rentaldelivery}</td>
              <td>{item.price}</td>
              

            </tr>
          ))}

        </tbody>
      </table>
      <button onClick={()=>{handle()}}  className="btn btn-primary">Añadir Alquiler</button>
      <Modal isOpen={show} style={modalStyles}>
      
        <ModalHeader toggle={handle}>
           REGISTRAR ALQUILER
        </ModalHeader>
        <ModalBody>
          <Form className="form" onSubmit={(e) => createclient(e)}>
            <FormGroup>
              <Label for="idclient">ID Cliente</Label>
              <Input type='number' id='idclient' value={idclient }  min="0" 
               maxLength='100' onChange={(e)=>(setidclient(e.target.value))} required>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="idgame">ID JUEGO</Label>
              <Input type='number' id='idgame' value={idgame }  min="0" 
               maxLength='100' onChange={(e)=>(setidgame(e.target.value))} required>
              </Input>
            </FormGroup>
            <FormGroup>
            <Label for="rentaldate">Fecha de Alquiler</Label>
             <Input type='date' id='rentaldate' value={rentaldate}  onChange={(e)=>setrentaldate(e.target.value)} required></Input>
            </FormGroup>
            <FormGroup>
            <Label for="rentaldelivery">Fecha devolucion</Label>
             <Input type='date' id='rentaldelivery' value={rentaldelivery}  onChange={(e)=>setrentaldelivery(e.target.value)} required></Input>
            </FormGroup>
            <FormGroup>
            <Label for="price">Precio</Label>
             <Input type='number' id='price' value={price} min ="0" maxLength="100" onChange={(e)=>setprice(e.target.value)}></Input>
            </FormGroup>
           
            
            <Button variant="success" type="submit">Registrar</Button>{' '}
            <Button variant="danger" onClick={handle}>Cerrar</Button>
          </Form>
        </ModalBody>
        <ModalFooter>
             
        </ModalFooter>
     </Modal>



    </div>
  );
  }

  export default Alquileres;