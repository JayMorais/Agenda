import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import Dados from '../../dadosTeste';
import Image from 'react-bootstrap/Image'
import api from '../../services/api';

type AgendaCont={
   nome:string;
   email:string;
   telefone:string;
}

const Agenda:React.FC = () => {
   const [agenda,setAgenda] = useState<AgendaCont[]>([]);  

   useEffect(()=>{

      api.get("agenda")
       .then(({data}) => {
         setAgenda(data.agenda);
      });
      //
      
   },[]);
   //console.log(data.agenda);
 function deleteCont(){
      console.log ('delete');
   }
   function editeCont(){
      console.log ('editar');
   }
 return(
    <>
    <h2>Contatos </h2>
    <div className='mt-5 '> 
    {agenda?.map((contato) =>(
         <ListGroup  className='row'>
             
         
         <ListGroup.Item   key={1} className="d-flex justify-content-between align-items-baseline">
            <div className="ms-2 me-auto">
              
               <div className="fw-bold">{contato.nome}</div>
                {contato.telefone}
            </div>
            <div className="ms-2 me-auto">
               <div className="fw">{contato.email}</div>
                
            </div>
            <div className='d-flex justify-content-end  pt-2 m-0'>
               <button className='btn btn-md btn-outline-primary me-2' onClick={editeCont}>Editar</button>
               <button className='btn btn-md btn-outline-danger' onClick={deleteCont}>Deletar</button>
            </div>
            </ListGroup.Item>
         
              </ListGroup>      
      ))}
      
    
    
    
   );
   </div>
   </>
 );
}
export default Agenda;
