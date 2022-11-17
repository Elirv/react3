import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import {Cart} from '../components/Cart/Cart';


export const CartPage = () => {

  const { stock, dataLS, setDataLS } = useContext(UserContext);

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
  return (
    <Cart
      deleteAll={deleteAll}
    />
  )
}