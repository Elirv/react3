import React, { useContext, useEffect } from 'react'
import { ProductsContainer } from '../components/ProductsContainer/ProductsContainer';
import { UserContext } from '../context/UserContext';
//import { useSearchParams } from 'react-router-dom';

export const ProductsPage = () => {

  const { stock, setStock, dataLS, setDataLS, wishLS, setWishLS } = useContext(UserContext)

  let interinC = JSON.parse(localStorage.getItem('stock'));
  let interinW = JSON.parse(localStorage.getItem('wish'));

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

  //search
// const handleInput = () => {

//     const [searchParams, setSearchParams] = useSearchParams();

//     const query = searchParams.get('query') ?? "" //me recoge el valor de la key linea 18//si no hay nada k recoger pasale una string vacia
//     //console.log(searchParams); //nos trae un objeto con los values

//     const handleInput = ({ target }) => { //e , ahora nos traemos el objeto target desestructuradi accedemos al input
//         const value = (target.value)  // ===== const {value} = target
//         console.log(target.value);      //tb nos traemos el value
//         //setSearchParams(value) value pasa a ser un objeto, lo nrmal es k se llame query, qu nos cambie la url
//         setSearchParams({ query: value })
//     }
//     //useSearchParams
//   }

  return (
    <>
      <ProductsContainer
        stock={stock}
        addToCart={addToCart}
        addWishlist={addWishlist}
        // handleInput={handleInput}
      />
    </>
  )
}