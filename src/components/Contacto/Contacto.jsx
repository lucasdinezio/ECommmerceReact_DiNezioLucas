import React from 'react';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
 
export const Contacto = () => {
    const  datosFormulario = React.useRef()
    let navigate = useNavigate()
    const  consultarFormulario = (e) => {
        e.preventDefault()
        console.log(datosFormulario.current)
        const datForm = new FormData(datosFormulario.current)
        const contacto = Object.fromEntries(datForm)
        console.log(contacto)
        e.target.reset()
        toast.success("Mensaje enviado correctamente 🚀", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        navigate("/")

    }

    return (
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
           <label htmlFor="consulta" className="form-label">Mensaje</label>
           <textarea className="form-control" name="consulta" rows={3} defaultValue={""}></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
