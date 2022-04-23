import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';
import { ropa } from '../../ropa';

const Usergreeting = () => {

  const [prendas, setPrendas] = useState([]);

    // fetch
  // async function traerProductosConFetch () {
  //   return fetch ('url')
  //     .then(res => res.json())
  // }

  // useEffect(() => {
  //   traerProductosConFetch()
  //     .then(prendaArray => setPrendas(prendaArray));
  // }, [])


  // fetch con un timeout
  // function traerProductos () {
  //   const myPromise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       fetch ('url')
  //       .then(productos => resolve(productos));

  //     }, 2000);
  //   });
  //   return myPromise;
  // }

  function traerProductos() {
    const myPromise = new Promise((resolve, reject) => {
      const productos = ropa;
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
    return myPromise;
  }  

  useEffect(() => {
    traerProductos()
      .then(prendaArray => setPrendas(prendaArray));
  }, [])

  return (
    <div>Welcome Back !
      <ItemList ropa={prendas} />
    </div>
  )
}

export default Usergreeting