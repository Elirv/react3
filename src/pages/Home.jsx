import React, { useEffect, useState } from 'react'
import { Cart } from '../components/Cart/Cart';
import { ProductContainer } from '../components/ProductContainer/ProductContainer'


export const Home = () => {

  const [stock, setStock] = useState([])
  let interinC = JSON.parse(localStorage.getItem('stock'));
  let interinW = JSON.parse(localStorage.getItem('wish'));
  const [dataLS, setDataLS] = useState([])
  const [wishLS, setWishLS] = useState([])

  const fetchData = async () => {
    const petiApi = await fetch('http://localhost:4000/forniture');
    const data = await petiApi.json();
    setStock(data)
  }

  // add cart
  useEffect(() => {
    if (interinC) { setDataLS(interinC) }
    fetchData()
  }, [])
  
    useEffect(() => {
      localStorage.setItem('stock', JSON.stringify(dataLS));
    }, [dataLS])
  
    const addToCart = (product) => {
      let interinc = JSON.parse(localStorage.getItem('stock')) || [];
      interinc.push(product);
      setDataLS(interinc)
    }


// add wishes
useEffect(() => {
  if (interinW) { setWishLS(interinW) }
  fetchData()
}, [])

  useEffect(() => {
    localStorage.setItem('wish', JSON.stringify(wishLS));
  }, [wishLS])

  const addWishlist = (product) => {
    let interin = JSON.parse(localStorage.getItem('wish')) || [];
    interin.push(product);
    setWishLS(interin)
  }

//intento borrar
const deleteToCart = (id) => {
  let interin = JSON.parse(localStorage.removeItem('stock')) || [];
  //interin.push(id);
  setWishLS(interin)
  //console.log(25452);
}

  return (
    <>
      <Cart
      deleteToCart={deleteToCart}
      stock={stock}
      addWishlist={addWishlist}
      />
      <ProductContainer
        stock={stock}
        addToCart={addToCart}
        addWishlist={addWishlist}
        deleteToCart={deleteToCart}
      />
    </>
  )
}
