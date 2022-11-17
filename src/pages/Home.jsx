import React, { useContext, useEffect, useState } from 'react'
import { ProductsContainer } from '../components/ProductsContainer/ProductsContainer';
import { UserContext } from '../context/UserContext';
import { CartPage } from './CartPage';

export const Home = () => {

  const { stock, setStock, dataLS, setDataLS } = useContext(UserContext)

  let interinC = JSON.parse(localStorage.getItem('stock'));
  let interinW = JSON.parse(localStorage.getItem('wish'));

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
    localStorage.setItem('basket', JSON.stringify(dataLS));
  }, [dataLS])

  const addToCart = (product) => {
    let interinc = JSON.parse(localStorage.getItem('basket')) || [];
    interinc.push(product);
    setDataLS(interinc)
    console.log(interinc);
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
    console.log(interin);
  }

  //intento borrar
  const deleteToCart = (product) => {
    console.log(product);
    let interin = JSON.parse(localStorage.removeItem('stock')) || [];
    //interin.push(id);
    setWishLS(interin)
    //console.log(25452);
  }

  const deleteAll = () => {

  }

  return (
    <>
      <ProductsContainer
        stock={stock}
        addToCart={addToCart}
        addWishlist={addWishlist}
        deleteToCart={deleteToCart}
      />
      <CartPage
      
      />
    </>
  )
}
