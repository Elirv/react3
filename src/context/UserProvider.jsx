import { useState } from 'react';
import { UserContext } from './UserContext'

export const UserProvider = ({ children }) => {

    const [stock, setStock] = useState([]);
    const [dataLS, setDataLS] = useState([]);
    const [wishLS, setWishLS] = useState([]);
    // const [search, setSearch] = useState([]);
    const [user, setUser] = useState([]);
    const [dataUser, setDataUser] = useState([]);
    

    return (
        <UserContext.Provider value={{ stock, setStock, dataLS, setDataLS, wishLS, setWishLS, user, setUser, dataUser, setDataUser, }}>
            {children}
        </UserContext.Provider>
    )
}
