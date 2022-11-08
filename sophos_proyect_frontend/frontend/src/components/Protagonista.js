import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';

import React, {useState, useEffect} from 'react';





function Protagonista() {
    const [show, setShow] = useState(false);
  
  const baseUrl = "https://localhost:7267/api/Games/Protagonist"


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


  useEffect(()=>{
    petitionget();
  },[])

  return (
    <div className="Juegos">
    
      <table className='table table-bordered'>
        <thead>
          <tr>
          <th>Protagonista</th>
            <th>ID</th>
            <th>Nombre</th>
            
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
              <td>{item.protagonist}</td>
              <td>{item.idgame}</td>
              <td>{item.gamename}</td>
             
              <td>{item.director}</td>
              <td>{item.producer}</td>
              <td>{item.gameplatform}</td>
              <td>{item.releasedate}</td>
              <td>{item.gamerental}</td>
              <td>

              <button className="btn btn-primary" contrast="5">Precio</button>
              </td>
            </tr>
          ))}
             
        </tbody>
      </table>
     


    </div>
  );
  }

  export default Protagonista;