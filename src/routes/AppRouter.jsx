import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import{Checkout} from '../components/Checkout/Checkout'
//import { Cart } from '../components/Cart/Cart'
import { Login } from '../components/Login/Login'
import { Wishes } from '../components/Wishes/Wishes'
import { PreHome } from '../components/PreHome/PreHome'
import { CartPage } from '../pages/CartPage'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/checkout' element={<Checkout/>}></Route>
      <Route path='/shoppingcart' element={<CartPage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/wishes' element={<Wishes/>}></Route>
      <Route path='/start' element={<PreHome/>}></Route>
    </Routes>
  )
}
