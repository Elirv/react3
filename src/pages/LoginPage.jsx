import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Login } from '../components/Login/Login';
import { UserContext } from '../context/UserContext'

export const LoginPage = () => {

  const navigate = useNavigate();

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

  //3. añadir el usuario al sessionstorage
  useEffect(() => {
    let interin = JSON.parse(sessionStorage.getItem('users'));
    setUser(interin)
  }, [])
  useEffect(() => {
    sessionStorage.setItem('users', JSON.stringify(user));
  }, [user])

  const loginUser = (e) => {
    e.preventDefault();

    //1.recoger info del formulario
    let usuario = {
      email: e.target.email.value,
      password: e.target.password.value
    };

    //2.comprobar que los datos sean correctos
    const interim = dataUser.find(user => (usuario.email === user.email) && (usuario.password === user.password))
    //if
    if (interim) {
      //console.log(interim)
      setUser(interim)
      alert('User registered successfully')
      //navigate("/start");
    } else {
      alert('Unregistered user, or incorrect data')
      navigate("/");
    }
  }

  ///----------------------------
  const registerUser = (e) => {
    e.preventDefault();

    //2.fetch post
    (async () => {
      const rawResponse = await fetch('http://localhost:4000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        //1.recoger info del formulario
        body: JSON.stringify({
          name: e.target.name.value,
          phone: e.target.phone.value,
          email: e.target.email.value,
          password: e.target.password.value
        })
      });
      const content = await rawResponse.json();
      console.log(content);
    })();
  }

  return (
    <>
      <Header />
      <Login
        dataUser={dataUser}
        loginUser={loginUser}
        registerUser={registerUser}
      />
      <Footer/>
    </>
  )
}
