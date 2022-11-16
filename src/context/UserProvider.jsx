import { useState } from 'react';
import { UserContext } from './UserContext'

export const UserProvider = ({ children }) => {

    const [stock, setStock] = useState([]);
    const [dataLS, setDataLS] = useState([])
    



    return (
        <UserContext.Provider value={{ stock, setStock, dataLS, setDataLS}}>
            {children}
        </UserContext.Provider>
    )
}
