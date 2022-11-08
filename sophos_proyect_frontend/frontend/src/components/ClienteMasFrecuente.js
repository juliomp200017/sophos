import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import { Button } from 'react-bootstrap';
import {Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label, Form} from 'reactstrap'
import React, {useState, useEffect} from 'react';





function ClienteMasFrecuente() {

  const baseUrl = "https://localhost:7267/api/Clients/mostfrequentclient"


  const [data,setData]=useState([]);
  const petitionget =async ()=>{
    await axios.get(baseUrl).then(response => {
      setData(response.data);
      console.log(data)
    }).catch(error=>{
        console.log(error)
    })
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
          {
            <tr key={data.idclient}>
              <td>{data.idclient}</td>
              <td>{data.clientname}</td>
              <td>{data.telephone}</td>
              <td>{data.email}</td>
              <td>{data.age}</td>
              <td>{data.clientaddress}</td>
              <td>{data.indentificationcard}</td>

            </tr>
          }

        </tbody>
      </table>
      



    </div>
  );
  }

  export default ClienteMasFrecuente;