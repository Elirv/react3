import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { Cart } from '../components/Cart/Cart';

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

//------------------------------------------------------------//
  useEffect(() =>{
localStorage.setItem('basket', JSON.stringify(interin))
  }, [])

  const deleteOne = (index) => {
    console.log(dataLS);
    let interin = dataLS.filter((item, indice) => index !== indice )
    console.log(interin)
    setDataLS(interin)
  }

  return (
    <Cart
      deleteAll={deleteAll}
      deleteOne={deleteOne}
    />
  )
}