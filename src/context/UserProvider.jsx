import { useState } from 'react';
import { UserContext } from './UserContext'

export const UserProvider = ({ children }) => {

    const [stock, setStock] = useState([]);
    const [dataLS, setDataLS] = useState([]);
    const [wishLS, setWishLS] = useState([])



    return (
        <UserContext.Provider value={{ stock, setStock, dataLS, setDataLS, wishLS, setWishLS}}>
            {children}
        </UserContext.Provider>
    )
}
