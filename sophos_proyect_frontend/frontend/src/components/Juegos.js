import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import { Button } from 'react-bootstrap';
import {Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label, Form} from 'reactstrap'
import React, {useState, useEffect} from 'react';





function Juegos() {
    const [show, setShow] = useState(false);
  const [gamename, setgamename] = useState('');
  const [protagonist, setprotagonist] = useState('');
  const [director, setdirector] = useState('');
  const [producer, setproducer] = useState('');
  const [gameplatform, setgameplatform] = useState('');
  const [gamerental, setgamerental] = useState('');
  const [releasedate, setreleasedate] = useState('');
  
  const baseUrl = "https://localhost:7267/api/Games"


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
              "gamename": gamename,
              "protagonist": protagonist,
              "director": director,
              "producer": producer,
              "gameplatform": gameplatform,
              "releasedate":releasedate,
              "gamerental": gamerental
              
           });
         handle();
    
  }

  useEffect(()=>{
    petitionget();
  },[])

  return (
    <div className="Juegos">
    
      <table className='table table-bordered'>
        <thead>
          <tr>
          
            <th>ID</th>
            <th>Nombre</th>
            <th>Protagonista</th>
            <th>Director</th>
            <th>Productor</th>
            <th>Plataforma</th>
            <th>Fecha de Lanzamiento</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item=>(
            
            <tr key={item.idgame}>
              
              <td>{item.idgame}</td>
              <td>{item.gamename}</td>
              <td>{item.protagonist}</td>
              <td>{item.director}</td>
              <td>{item.producer}</td>
              <td>{item.gameplatform}</td>
              <td>{item.releasedate}</td>
              <td>{item.gamerental}</td>

            </tr>
          ))}

        </tbody>
      </table>
      <button onClick={()=>{handle()}}  className="btn btn-primary">Añadir Juego</button>
      <Modal isOpen={show} style={modalStyles}>
        

        <ModalHeader toggle={handle}>
        REGISTRAR JUEGO
        </ModalHeader>
        <ModalBody>
          <Form className="form" onSubmit={(e) => createclient(e)}>
            <FormGroup>
              <Label for="gamename">Nombre</Label>
              <Input type='text' id='gamename' value={gamename}  
               maxLength='100' onChange={(e)=>(setgamename(e.target.value))} required>
              </Input>
            </FormGroup>
            <FormGroup>
             <Label for="protagonist">Protagonista </Label>
             <Input type="text" id="protagonist" value={protagonist} maxLength="1000" onChange={(e)=>setprotagonist(e.target.value)} required></Input>
            </FormGroup>
            <FormGroup>
            <Label for="director">Director</Label>
             <Input type='text' id='director' value={director} maxLength="100" onChange={(e)=>setdirector(e.target.value)} required></Input>
            </FormGroup>
            <FormGroup>
            <Label for="producer">Productor</Label>
             <Input type='text' id='producer' value={producer} maxLength="100" onChange={(e)=>setproducer(e.target.value)} required></Input>
            </FormGroup>
            <FormGroup>
            <Label for="gameplatform">Plataforma</Label>
             <Input type='text' id='gameplatform' value={gameplatform}  maxLength="1000" onChange={(e)=>setgameplatform(e.target.value)}></Input>
            </FormGroup>
            <FormGroup>
            <Label for="releasedate">Fecha de Lanzamiento</Label>
             <Input type='date' id='releasedate' value={releasedate}  onChange={(e)=>setreleasedate(e.target.value)}></Input>
            </FormGroup>
            <FormGroup>
            <Label for="gamerental">Precio</Label>
             <Input type='number' id='gamerental' value={gamerental}  onChange={(e)=>setgamerental(e.target.value)}></Input>
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

  export default Juegos;