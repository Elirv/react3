import { useReducer } from "react"
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";


import { AuthReducer } from "./AuthReducer";


export const AuthProvider = ({Children}) => {
    
    const initArgs = {     //nos lo traemos ahra no es initial state cino init Args
        isLogged: false,
        //user: user, 
    };
    
    //creamos el usereducer:
    const [authState, dispatch] = useReducer(AuthReducer, initArgs);
    
    // const login = () => {
    //     const user = {
    //         id: 1,
    //         user: 'eli'
    //     }
    //     dispatch({
    //         type: types.login,
    //         payload: user,  //** */
    //     })
    // }

    return (
        <AuthContext.Provider value={
            {  
                authState
                // ...authState,  //*** */
                // login: login
                }
        }>
            {Children}
        </AuthContext.Provider>
    )
}
