import { useContext, useEffect } from "react";
import { Checkout } from "../components/Checkout/Checkout"
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { UserContext } from "../context/UserContext";

export const CheckoutPage = () => {

  const { dataUser, setDataUser, userAddress, setUserAddress } = useContext(UserContext);
  
  useEffect(() => {
    let interin = JSON.parse(localStorage.getItem('address'));
    fetchUserAddress();
    setDataUser(interin)
  }, [])
  
  useEffect(() => {
    localStorage.setItem('address', JSON.stringify(dataUser));
  }, [dataUser])
  
  const fetchUserAddress = async () => {
    const petiApi = await fetch('http://localhost:4000/address');
    const data = await petiApi.json();
    setUserAddress(data)
  }
  
  const userPutAddress = (e) => {
    e.preventDefault();
    
    //2.fetch post
    
    (async () => {
      const response = await fetch('http://localhost:4000/address', {
        method: 'POST',
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
      const content = await response.json();
      console.log(content);
    })();
  }

  return (
    <>
      <Header />
      <Checkout
        // dataUser={dataUser}
        userPutAddress={userPutAddress}
      />
      <Footer />
    </>
  )
}
