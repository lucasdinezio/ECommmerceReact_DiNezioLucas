import React from 'react';
import { useState } from 'react';
import {toas, toast} from 'react-toastify'
export const ItemCount = ({valInicial, stock, onAdd}) => {
    
    const [contador, setContador] = useState(valInicial)
    

    const sumar = () => (contador < stock) && setContador(contador + 1)
    const restar = () => (contador > valInicial) && setContador(contador - 1)
    const agregarCarrito = () => {
        onAdd(contador)
        toast.success (`Agregaste ${contador} productos al carrito🤩`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

    }
 
    return (
        <>
            <button className='btn btn-dark' onClick={() => sumar()}>+</button>
            {contador}
            <button className='btn btn-dark' onClick={() => restar()}>-</button>
            <button className='btn btn-dark' onClick={() => agregarCarrito()}>Agregar al carrito</button>
        </>
    );
}


