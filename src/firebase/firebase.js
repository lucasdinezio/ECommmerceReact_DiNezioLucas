
import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, addDoc, getDoc, getDocs, updateDoc, deleteDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-trabajofinal-2023.firebaseapp.com",
  projectId: "react-trabajofinal-2023",
  storageBucket: "react-trabajofinal-2023.appspot.com",
  messagingSenderId: "348176937567",
  appId: "1:348176937567:web:32442dc4f4e07b16e161ea"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore()

export const cargarBDD = async () => {
  const promise = await fetch('./json/productos.json')
  const productos = await promise.json()
  productos.forEach( async (prod) => {
      await addDoc(collection(db,"productos"), {
          nombre: prod.nombre,
          marca: prod.marca,
          modelo: prod.modelo,
          categoria: prod.categoria,
          stock: prod.stock,
          precio: prod.precio,
          img: prod.img
      })
  })
}

export const getProductos = async() =>{
  const productos = await getDocs(collection(db,"productos"))
    const items = productos.docs.map(prod => {
        return {...prod.data(), id: prod.id}
    })
    return items
}

export const getProducto = async(id) => {
  const producto = await getDoc(doc(db, "productos", id))
  const item = {...producto.data(), id: producto.id}
  return item
}

export const updateProducto = async(id, info) => {
  await updateDoc(doc(db, "productos", id), info)
}

export const deleteProducto = async(id) => {
  await deleteDoc(doc(db, "productos", id))
}

export const createOrdenCompra = async(cliente, productos,precioTotal, fecha) => {
  const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
      datosCliente: cliente,
      productos: productos,
      precioTotal: precioTotal, 
      fecha: fecha
  })
  return ordenCompra
}

export const getOrdenCompra = async(id) => {
  const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
  const oCompra = {...ordenCompra.data(), id: ordenCompra.id}
  return oCompra
}




