import { useContext, useEffect } from "react";
import { Checkout } from "../components/Checkout/Checkout"
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { UserContext } from "../context/UserContext";

export const CheckoutPage = () => {

  const { userAddress, setUserAddress } = useContext(UserContext);
  
  useEffect(() => {
    let interin = JSON.parse(sessionStorage.getItem('address'));
    fetchUserAddress();
    setUserAddress(interin)
  }, [])
  
  useEffect(() => {
    sessionStorage.setItem('address', JSON.stringify(userAddress));
  }, [userAddress])
  
  const fetchUserAddress = async () => {
    const petiApi = await fetch('http://localhost:4000/users/address');
    const data = await petiApi.json();
    setUserAddress(data)
  }
  
  const userPutAddress = (e) => {
    e.preventDefault();
    
    //2.fetch post
    
    (async () => {
      const response = await fetch('http://localhost:4000/users/address', {
        method: 'PUSH',
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
