import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProductsPage } from '../pages/ProductsPage'
import { PreHome } from '../components/PreHome/PreHome'
import { CartPage } from '../pages/CartPage'
import ErrorPage from '../components/ErrorPage/ErrorPage'
import { LoginPage } from '../pages/LoginPage'
import { WishesPage } from '../pages/WishesPage'
import { CheckoutPage } from '../pages/CheckoutPage'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<PreHome/>}></Route>
      <Route path='/checkout' element={<CheckoutPage/>}></Route>
      <Route path='/shoppingcart' element={<CartPage/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/wishes' element={<WishesPage/>}></Route>
      <Route path='/start' element={<ProductsPage/>}></Route>
      <Route path="/*" element={<ErrorPage />} />  

    </Routes>
  )
}
