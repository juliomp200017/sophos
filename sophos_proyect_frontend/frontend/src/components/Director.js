import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';

import React, {useState, useEffect} from 'react';





function Director() {
    const [show, setShow] = useState(false);
 
  const baseUrl = "https://localhost:7267/api/Games/Director"
  


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
          <th>Director</th>
            <th>ID</th>
            <th>Nombre</th>
            <th>Protagonista</th>
            
            <th>Productor</th>
            <th>Plataforma</th>
            <th>Fecha de Lanzamiento</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item=>(
            
            <tr key={item.idgame}>
              <td>{item.director}</td>
              <td>{item.idgame}</td>
              <td>{item.gamename}</td>
              <td>{item.protagonist}</td>
              
              <td>{item.producer}</td>
              <td>{item.gameplatform}</td>
              <td>{item.releasedate}</td>
              <td>{item.gamerental}</td>

            </tr>
          ))}

        </tbody>
      </table>
      <button onClick={()=>{handle()}}  className="btn btn-primary">Añadir Juego</button>
    



    </div>
  );
  }

  export default Director;