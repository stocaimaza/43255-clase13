import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
//Vamos a importar dos funciones de la librería Firebase. 
//initializeApp = esta función la utilizo para INICIAR LA CONEXIÓN CON FIREBASE. 

//getFirestore = se utiliza par obtener una instancia de Firestore. 

//Acá estamos trabajando con un objeto que tiene toda nuestra información de la cuenta. Acá se encuentra la key personal de acceso a la BD. 

const firebaseConfig = {
    apiKey: "AIzaSyCAMK07Gmkkc0ppTzdUdlerj_1sXfI1iLM",
    authDomain: "coder43255-337d8.firebaseapp.com",
    projectId: "coder43255-337d8",
    storageBucket: "coder43255-337d8.appspot.com",
    messagingSenderId: "521856385718",
    appId: "1:521856385718:web:cd2540636d3167880ddc17"
  }


//Inicializamos Firebase y se pasa la configuración como argumento. Esto me devuelve una instancia de Firebase. 

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
//Exportamos esta referencia para que este disponible en toda nuestra aplicación. 

