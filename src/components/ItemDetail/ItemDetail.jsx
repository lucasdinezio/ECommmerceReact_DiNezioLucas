import React from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useDarkModeContext } from '../../context/DarkModeContext'
import { useCarritoContext } from '../../context/CarritoContext';

export const ItemDetail = ({item}) => {
    const {darkMode} = useDarkModeContext()
    const {addItem} = useCarritoContext()
    
    const onAdd = (cantidad) => {
        addItem(item, cantidad)
    }

    return (
    <div className='row g-0'>
        <div className="col-md-4">
            <img src={item.img} className="img-fluid rounded-start" alt={`Imagen de ${item.nombre}`} />
        </div>
        <div className="col-md-8">
            <div className='card-body' >
                <h5 className='card-title'>{item.nombre} {item.modelo}</h5>
                <p className='card-text'>Marca: {item.marca}</p>
                <p className='card-text'>Precio: ${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                <p className='card-text'>Stock: {item.stock}</p>
                <ItemCount valInicial={1} stock={item.stock} onAdd={onAdd}/>
                <Link className='nav-link' to={"/cart"}><button className='btn btn-secondary'>Finalizar Compra</button></Link>
            </div>
        </div>
    </div>
    )
}

export default ItemDetail;
