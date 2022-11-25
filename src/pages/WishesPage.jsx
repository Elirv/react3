import React, { useContext, useEffect } from 'react'
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Wishes } from '../components/Wishes/Wishes';
import { UserContext } from '../context/UserContext'

export const WishesPage = () => {

    const { wishLS, setWishLS } = useContext(UserContext);

    let interin = JSON.parse(localStorage.getItem('wish'))

    useEffect(() => {
        if (interin) { setWishLS(interin) }
    }, [])

    useEffect(() => {
        localStorage.setItem('wish', JSON.stringify(wishLS))
    }, [wishLS])

    const deleteAll = () => {
        setWishLS([])
    }

    //------------------------------------------------------------//
    useEffect(() => {
        localStorage.setItem('wish', JSON.stringify(interin))
    }, [])

    const deleteOne = (index) => {
        console.log(wishLS);
        let interin = wishLS.filter((item, indice) => index !== indice)
        console.log(interin)
        setWishLS(interin)
    }

    return (
        <>
            <Header/>
            <Wishes
                deleteAll={deleteAll}
                deleteOne={deleteOne}
            />
            <Footer/>
        </>
    )
}