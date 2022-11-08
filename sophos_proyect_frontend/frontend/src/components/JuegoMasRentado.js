import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import React, {useState, useEffect} from 'react';





function JuegoMasRentado() {

  const baseUrl = "https://localhost:7267/api/Games/mostfrequentgame"


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
            <th>Protagonista</th>
            <th>Director</th>
            <th>Productor</th>
            <th>Plataforma</th>
            <th>Fecha de Lanzamiento</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
        {
            
            <tr key={data.idgame}>
              
              <td>{data.idgame}</td>
              <td>{data.gamename}</td>
              <td>{data.protagonist}</td>
              <td>{data.director}</td>
              <td>{data.producer}</td>
              <td>{data.gameplatform}</td>
              <td>{data.releasedate}</td>
              <td>{data.gamerental}</td>

            </tr>
          }

        </tbody>
      </table>
      



    </div>
  );
  }

  export default JuegoMasRentado;