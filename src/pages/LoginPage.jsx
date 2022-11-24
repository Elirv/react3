import React, { useContext, useEffect } from 'react'
import { Login } from '../components/Login/Login';
import { UserContext } from '../context/UserContext'

export const LoginPage = () => {

  const { user, setUser, dataUser, setDataUser } = useContext(UserContext);

  useEffect(() => {
    let interin = JSON.parse(localStorage.getItem('users'));
    fetchDatauser();
    setUser(interin)
  }, [])

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(user));
  }, [user])

  const fetchDatauser = async () => {
    const petiApi = await fetch('http://localhost:4000/users');
    const data = await petiApi.json();
    setDataUser(data)

  }

  return (
    <Login
    dataUser={dataUser}
    />
  )
}
