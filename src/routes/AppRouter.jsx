import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProductsPage } from '../pages/ProductsPage'
import{Checkout} from '../components/Checkout/Checkout'
import { Wishes } from '../components/Wishes/Wishes'
import { PreHome } from '../components/PreHome/PreHome'
import { CartPage } from '../pages/CartPage'
import ErrorPage from '../components/ErrorPage/ErrorPage'
import { Cart } from '../components/Cart/Cart'
import { LoginPage } from '../pages/LoginPage'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<PreHome/>}></Route>
      <Route path='/checkout' element={<Checkout/>}></Route>
      <Route path='/shoppingcart' element={<CartPage/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/wishes' element={<Wishes/>}></Route>
      <Route path='/start' element={<ProductsPage/>}></Route>
      <Route path="/*" element={<ErrorPage />} />  

      <Route path='temp' element={<Cart/>} />

    </Routes>
  )
}
