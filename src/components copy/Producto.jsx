//Producto.jsx

import { useState } from 'react'
const Formulario = () => {
    //Estados del formulario
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [edad, setEdad] = useState('');
    const [email, setEmail] = useState('');
    const actualizarDatos = (e) => {
        console.log('Escribiendo')
    }
    return (
        <form className="formulario">
            <div className="form-group">
                <label>Nombre</label>

                <input
                    type="text"
                    name="nombre"
                    className="form-control"
                    onChange={(e) => setNombre(e.target.value)}
                    value={nombre}
                />
            </div>
            <div className="form-group">
                <label>Apellido</label>
                <input
                    type="text"
                    name="apellido"
                    className="form-control"
                    onChange={(e) => setApellido(e.target.value)}
                    value={apellido}
                />
            </div>
            <div className="form-group">
                <label>Edad</label>
                <input
                    type="text"
                    name="edad"
                    className="form-control"
                    onChange={(e) => setEdad(e.target.value)}
                    value={edad}
                />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    )
}
export default Formulario
