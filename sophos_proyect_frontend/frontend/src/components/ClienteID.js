
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import  {useParams} from 'react-router-dom'; 









function ClienteID() {

    const baseUrl = "https://localhost:7267/api/Clients"
   
    let params = useParams()
    const [data,setData]=useState([]);
    const petitionget =async ()=>{
      await axios.get(baseUrl+`/${params.id}`).then(response => {
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
        
  
  
  
      </div>
    );
    }

    export default ClienteID;
  