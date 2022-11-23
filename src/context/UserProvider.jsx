import { useState } from 'react';
import { UserContext } from './UserContext'

export const UserProvider = ({ children }) => {

    const [stock, setStock] = useState([]);
    const [dataLS, setDataLS] = useState([]);
    const [wishLS, setWishLS] = useState([]);
    // const [search, setSearch] = useState([]);
    const [user, setUser] = useState([]);
    const [loginUser, setLoginUser] = useState([]);
    const [loginPass, setLoginPass] = useState([]);

    return (
        <UserContext.Provider value={{ stock, setStock, dataLS, setDataLS, wishLS, setWishLS, user, setUser, loginUser, setLoginUser, loginPass, setLoginPass}}>
            {children}
        </UserContext.Provider>
    )
}
