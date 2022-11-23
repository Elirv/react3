import React, { useContext, useEffect, useRef } from 'react'
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


  // const saveData = (e) => {
  //   e.preventDefault();
  //   console.log('no estoy dentro');
  //   let userr = {
  //     name: e.target.name.value,
  //     email: e.target.email.value,
  //     password: e.target.password.value
  //   };
  //   console.log(userr);
  //   setUser(userr);
  // }



  //let interin = JSON.parse(localStorage.getItem('users'));

  // const fetchData = async () => {
  //   const petiApi = await fetch('http://localhost:4000/users');
  //   const data = await petiApi.json();
  //   setStock(data)
  //}

  // const saveData = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.email.value);
  // }

  //---------------//
  // const sessionStart = (e) => {
  //     e.preventDefault();

  //     const InputRef = useRef();

  //     let userEmail = InputRef.current.value;
  //     console.log(userEmail);
  //     let userPass = InputRef.current.value;
  //     if (userEmail.lenght === 0 || userPass.lenght === 0){
  //         alert('Complete the data');
  //     }else{
  //         if(login === "bla" && loginPass === "123"){
  //             setLoginUser ('true');

  //         }else{
  //             setLoginUser ('false');
  //             alert('error')
  //             InputRef.current.value = '';
  //             InputRef.current.value = '';
  //         }
  //     }
  // } 
  //---------------//


  // useEffect(() => {
  //     if (interin) { setLogin(interin) }
  //     fetchData()
  //   }, [])

  //   useEffect(() => {
  //     localStorage.setItem('users', JSON.stringify(login));
  //   }, [login])

  return (
    <Login
    // sessionStart={sessionStart}
    //saveData={saveData}
    dataUser={dataUser}
    />
  )
}
