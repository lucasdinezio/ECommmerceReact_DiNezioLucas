import React from 'react';
import { Link } from 'react-router-dom';

import { useDarkModeContext } from '../../context/DarkModeContext';

export const Item = ({item}) => {
  const {darkMode} = useDarkModeContext()

    return (
      <div className= {`card mb-3 mt-3 cardProducto ${darkMode ? 'text-dark bg-secondary' : 'border-light'}`}>
        <img src={item.img} className="card-img-top" alt={"producto"} />
          <div className={`card-body ${darkMode ? 'cardBodyDark' : 'cardBody'}`}>
             <h5 className="card-title">{item.nombre} {item.modelo}</h5>
             <p className="card-text">{item.marca}</p>
             <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
             <button className='btn btn-dark'><Link className='nav-link' to={`/item/${item.id}`}>Ver Producto</Link></button>
          </div>
      </div>
    );
}


