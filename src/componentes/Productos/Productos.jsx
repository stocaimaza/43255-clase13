//Importamos algunos Hooks que necesitemos
import { useState, useEffect } from "react";
import "./Productos.css"

//Importamos las funciones de Firebase que necesitamos para mostrar los productos. 

import { getDocs, collection, query, where, doc, updateDoc } from "firebase/firestore";

//getDocs me permite obtener los documentos de una colección. 
//collection me permite obtener una colección. 
//query la voy a usar cuando quiero generar una consulta a la bd.
//where la uso para filtrar mis consultas

//Para actualizar el stock traigo doc y updateDoc

import { db } from "../../services/config.js";

const Productos = () => {
    const [productos, setProductos] = useState([]); 

    useEffect( ()=> {

        //const misProductos = query(collection(db, "inventario"))

        //Si quisiera filtrar por precio puedo usar where: 
        const misProductos = query(collection(db, "inventario"), where("precio", "<", 600))

        getDocs(misProductos)
            .then(respuesta => {
                setProductos(respuesta.docs.map((doc) => ({id: doc.id, ...doc.data()})))
                //doc.data() es una función de Firebase que devuelve un objeto con los datos del documento que se esta consultando. NO SE OLVIDEN LOS PARENTESIS COMO YO 
            })
            .catch(error => console.log(error))
            //Creo un nuevo array que contenga los datos del producto y además el id. 
    },[productos])
    //Obtengo los datos cuando se monta el componente. 

    //MODIFICACIÓN: Quiero descontar stock cada vez que hago click en "Comprar".

    const descontarStock = async(producto) => {
        const productoRef = doc(db,"inventario",producto.id);
        const nuevoStock = producto.stock - 1;

        await updateDoc(productoRef, {stock: nuevoStock});
    }

  return (
    <>
        <h2>Productos</h2>
        <div className="productos-container">
            {
                productos.map(producto => (
                    <div className="producto-card" key={producto.id}>
                        <h2> {producto.nombre} </h2>
                        <p> Precio: $ {producto.precio} </p>
                        <p> Stock: {producto.stock} </p>
                        <button onClick={() => descontarStock(producto)}> Comprar </button>
                    </div>
                ))
            }

        </div>

    </>
  )
}

export default Productos