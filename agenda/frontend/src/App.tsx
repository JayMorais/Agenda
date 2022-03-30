import React from 'react';
import './App.css';
import{BrowserRouter} from 'react-router-dom';
import RoutesApp from './routes';
import HeaderCustom from './components/Header'; 
function App() {
  
  return (
    <div className='mt-3'>
   <BrowserRouter>
  

   
   <HeaderCustom/>
    <RoutesApp/>
   
  
   
   </BrowserRouter>
   </div>
  );
}

export default App;
