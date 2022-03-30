import React from 'react';
import {Route,Routes} from 'react-router-dom';

import Agenda from './pages/Agenda';
import Cadastro from './pages/Agenda/Cadastro';
import Atualizar from './pages/Atualizar';


const RoutesApp: React.FC = () =>{
    return ( 
        <Routes>
             <Route path="/"  element={<Agenda/>} />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/atualizar" element={<Atualizar/>} />
        
   
        </Routes>

             
        
          
        
    );
}
export default RoutesApp;