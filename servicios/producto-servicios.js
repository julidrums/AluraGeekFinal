import {  onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { firebaseApp } from "../controllers/firebase.js";
import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js'

const db = getFirestore(firebaseApp);



//GET

const listarProductosFireBase = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
 const productos = []
  querySnapshot.forEach((doc) => {
    productos.push({id:doc.id, ...doc.data()})
    console.log(`${doc.id} => ${doc.data()}`);
  });
return productos
}
const listaProductos = () =>
  fetch("http://localhost:3000/productos")
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));

const listarUnProducto = (id) => {
  return fetch(`http://localhost:3000/productos/${id}`).then((respuesta) => {
    return respuesta.json();
  });
};

//POST
const creaProductosFirebase = async (name, imageUrl, price) =>{
  try {
    const docRef = await addDoc(collection(db, "products"), {
      name,
      imageUrl,
      price
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    throw new Error("Error adding document: ", e)
    
  }
}
const creaProdutos = (name, imageUrl, price) => {
  return fetch(`http://localhost:3000/productos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      price,
    }),
  }).then((respuesta) => {
    if (respuesta.ok) {
      console.log(db);
      return respuesta.body;
    }
    throw new Error("No fué posible crear un producto");
  });
};

// // PUT/PATCH
const alteraProducto = async (id, name, price, description) => {
  return fetch(`http://localhost:3000/productos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      price,
      description,
    }),
  })
    .then((respuesta) => {
      return respuesta.json();
    })
    .catch((error) => console.log(error));
};

// DELETE
const deleteProducto = async (id) => {
  return await fetch(`http://localhost:3000/productos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const productoServices = {
    listaProductos,
    listarUnProducto,
    creaProdutos,
    creaProductosFirebase,
    listarProductosFireBase,
  alteraProducto,
  deleteProducto,
   
  };