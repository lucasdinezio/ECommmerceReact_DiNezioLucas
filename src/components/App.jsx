import './App.css'
import 'react-toastify/dist/ReactToastify.css'


import { BrowserRouter, Routes, Route  } from 'react-router-dom';


import { ToastContainer } from 'react-toastify';


import Navbar from "./Navbar/Navbar";
import {ItemListContainer} from "./ItemListContainer/ItemListContainer";
import {ItemDetailContainer} from './ItemDetailContainer/ItemDetailContainer';
import {Contacto} from './Contacto/Contacto';
import { Cart } from './Cart/Cart';
import { Checkout } from './Checkout/Checkout';


import { DarkModeProvider } from '../context/DarkModeContext';
import { CarritoProvider } from '../context/CarritoContext';





const App = () => {
  
  return (
    <>

    <BrowserRouter>
    <CarritoProvider>
        <DarkModeProvider>
          <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/> 
              <Route path='/item/:id' element={<ItemDetailContainer/>}/>
              <Route path='/category/:categoria' element={<ItemListContainer/>}/>
              <Route path='/contacto' element={<Contacto/>}/> 
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
            </Routes> 
            <ToastContainer/>
        </DarkModeProvider>
      </CarritoProvider>
      
    </BrowserRouter>
      
    </>
  );
}

export default App;

