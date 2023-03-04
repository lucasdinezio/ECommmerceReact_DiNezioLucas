import { Link } from "react-router-dom";
import React from "react";

const Categorias = React.memo(() => {
    return (
     
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><button className="btn btn-dark">Productos</button>
               </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to={"/category/iPhones"}>iPhones</Link></li>
                  <li><Link className="dropdown-item" to={"/category/MacBook Air"}>MacBook Air</Link></li>
                  <li><Link className="dropdown-item" to={"/category/MacBook Pro"}>MacBook Pro</Link></li>
                  <li><Link className="dropdown-item" to={"/category/Accesorios"}>Accesorios</Link></li>
                </ul>
            </li>   
    );
})

export default Categorias;
