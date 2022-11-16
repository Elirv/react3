import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'

export const CartPage = () => {
    
    const {stock,dataLS, setDataLS} = useContext(UserContext);
    console.log(stock);
    let interin = JSON.parse(localStorage.getItem('basket'))
    useEffect(()=>{
        if(interin) {setDataLS(interin)}
    },[])
  return (
    <>
    {dataLS.map((data, index) =>{
        return (

            <div key={index}>{data.name}</div>
        )
    })}
    </>
  )
}
