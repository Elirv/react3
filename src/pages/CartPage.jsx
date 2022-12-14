import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { Cart } from '../components/Cart/Cart';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

export const CartPage = () => {

  const { dataLS, setDataLS } = useContext(UserContext);

  let interin = JSON.parse(localStorage.getItem('basket'))

  useEffect(() => {
    if (interin) { setDataLS(interin) }
  }, [])

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(dataLS))
  }, [dataLS])

  const deleteAll = () => {
    setDataLS([])
  }

  const initialValue = 0;
  const totalCart = dataLS?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    initialValue
  );

  
  //------------------------------------------------------------//
  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(interin))
  }, [])
  
  const deleteOne = (index) => {
    console.log(dataLS);
    let interin = dataLS.filter((item, indice) => index !== indice)
    console.log(interin)
    setDataLS(interin)
  }
  //const itemsInCart = state.dataLS.find(item => item.id === )

  return (
    <>
      <Header/>
      <Cart
        deleteAll={deleteAll}
        deleteOne={deleteOne}
        totalCart={totalCart}
      />
      <Footer />
    </>
  )
}