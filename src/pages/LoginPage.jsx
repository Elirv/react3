import React, { useContext, useEffect } from 'react'
import { Login } from '../components/Login/Login';
import { UserContext } from '../context/UserContext'

export const LoginPage = () => {

    const {login, setLogin, stock, setStock} = useContext(UserContext)

    let interin = JSON.parse(localStorage.getItem('users'));

    const fetchData = async () => {
      const petiApi = await fetch('http://localhost:4000/users');
      const data = await petiApi.json();
      setStock(data)
    }

    useEffect(() => {
        if (interin) { setLogin(interin) }
        fetchData()
      }, [])

      useEffect(() => {
        localStorage.setItem('users', JSON.stringify(login));
      }, [login])

  return (
    <Login 

    />
  )
}
