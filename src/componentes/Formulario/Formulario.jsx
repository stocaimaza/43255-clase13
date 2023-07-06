import { useState } from "react"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"
import "./Formulario.css"

const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    //Creamos 3 estados para trabajar los valores del formulario. 

    //Armamos una función manejadora del formulario: 

    const manejadorFormulario = (e) => {
        e.preventDefault();

        addDoc(collection(db, "usuarios"), {
            nombre: nombre,
            apellido: apellido,
            telefono: telefono
        })

        //addDoc es una función que me permite agregar un documento nuevo en mi colección. 

        setNombre("");
        setApellido("");
        setTelefono("");
    }

    return (
        <form onSubmit={manejadorFormulario} className="formulario-container">
            <h2>Formulario de Contacto </h2>

            <div className="form-group">
                <label htmlFor="nombre">Nombre:</label>
                <input
                    type="text"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="apellido">Apellido:</label>
                <input
                    type="text"
                    id="apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="celular">Celular:</label>
                <input
                    type="text"
                    id="celular"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                />
            </div>


            <button type="submit"> Enviar  </button>


        </form>
    )
}

export default Formulario