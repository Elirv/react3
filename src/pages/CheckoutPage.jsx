import { useContext, useEffect } from "react";
import { Checkout } from "../components/Checkout/Checkout"
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { UserContext } from "../context/UserContext";

export const CheckoutPage = () => {

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
    const petiApi = await fetch('http://localhost:4000/users/address');
    const data = await petiApi.json();
    setDataUser(data)
  }

  //3. añadir el address al sessionstorage
  useEffect(() => {
    let interin = JSON.parse(sessionStorage.getItem('users/address'));
    setUser(interin)
  }, [])
  useEffect(() => {
    sessionStorage.setItem('users/address', JSON.stringify(user));
  }, [user])

  const userAddress = (e) => {
    e.preventDefault();

    //2.fetch post
    (async () => {
      const rawResponse = await fetch('http://localhost:4000/users/address', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        //1.recoger info del formulario
        body: JSON.stringify({
          surname: e.target.surname.value,
          address: e.target.address.value,
          phone: e.target.phone.value,
          city: e.target.city.value,
          postalcode: e.target.postalcode.value,
          birthday: e.target.birthday.value
        })
      });
      const content = await rawResponse.json();
      console.log(content);
    })();
  }

  return (
    <>
      <Header />
      <Checkout
        dataUser={dataUser}
        userAddress={userAddress}
      />
      <Footer />
    </>
  )
}
