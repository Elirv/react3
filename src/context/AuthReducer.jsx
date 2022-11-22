import {types} from '../types/types'

// const initialState = {
//     isLogged: false,
//     user: user,  // como el key y el value son iguales puedes poner solo user,
// };

export const AuthReducer = (state = {}, action) => {

    switch(action.type) {
        //traer los types
        case types.login:     
            return {   //devolverlo del estado inicial
                ...state,
                isLogged: true,
                user: action.payload,
            }; 
        case types.logout:   
            return {
                ...state,
                isLogged: false,
            }
        default:
            return state;
    }
};
