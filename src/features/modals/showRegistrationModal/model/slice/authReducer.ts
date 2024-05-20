import {AuthAction, AuthActionTypes, AuthState} from "../types/auth.ts";


const initialState:AuthState = {
    email: "",
    password: "",
}
// Reducer
export const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.UPDATE_EMAIL:

            return {email: action.payload, password: state.password}
        case AuthActionTypes.UPDATE_PASSWORD:

            return {email: state.email, password: action.payload}
        default:
            return state
    }
}

// Action Creators
export const updateEmail = (email: string) => ({type: AuthActionTypes.UPDATE_EMAIL, payload: email});
export const updatePassword = (password: string) => ({type: AuthActionTypes.UPDATE_PASSWORD, payload: password});
