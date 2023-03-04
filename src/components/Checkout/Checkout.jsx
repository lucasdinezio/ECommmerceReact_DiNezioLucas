import { useCarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import React from "react"
import { useNavigate } from "react-router-dom"
import {toast} from 'react-toastify'
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto } from "../../firebase/firebase"

export const Checkout = () => {
    const {carrito, emptyCart, totalPrice} = useCarritoContext()
    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)

        if (cliente.email !== cliente.repEmail){
            toast.error ('El correo electrónico no coincide.')
            return;
        }

        const aux = [...carrito]

        aux.forEach(prodCarrito => {
            getProducto(prodCarrito.id).then(prodBDD => {
                prodBDD.stock -= prodCarrito.cant
                updateProducto(prodCarrito.id, prodBDD)
            })
        })

        createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra =>{
            toast.success(`¡Muchas gracias por confiar! La orden de compra ${ordenCompra.id
            } por un total de $ ${new Intl.NumberFormat('de-DE').format(totalPrice())} se realizó con éxito.`)
            emptyCart()
            e.target.reset()
            navigate("/")
        })

    }

    return (
        <>
            {carrito.length === 0
            ?
            <>
                <h2>Carrito vacío</h2>
                <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continuar comprando</button></Link> 
            </>
            
            :
            
            <div className="container mt-5">
                <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre y apellido❗</label>
                <input type="text" className="form-control" name='nombre' required/>
                </div>
                <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo electrónico❗</label>
                <input type="email" className="form-control" name='email' required/>
                </div>
                <div className="mb-3"> 
                <label htmlFor="repEmail" className="form-label">Repetir correo electrónico❗</label>
                <input type="email" className="form-control" name='repEmail' required/>
                </div>
                <div className="mb-3"> 
                <label htmlFor="direccion" className="form-label">Dirección❗</label>
                <input type="text" className="form-control" name='direccion' required/>
                </div>
    
                <button type="submit" className="btn btn-primary">Finalizar compra</button>
                </form>
            </div>
            }
        </>
    

        
    );
}

export default Checkout;
