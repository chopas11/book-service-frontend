import {UserActionTypes, UserSchema} from "../types/userSchema.ts";

const initialState:UserSchema = {
    user: undefined,
    isAuth: true,
    balance: 0,
}

export interface UserAction {
    type: string,
    payload?: never;
}

export const UserReducer = (state = initialState, action: UserAction) :UserSchema => {
    switch (action.type) {
        case UserActionTypes.SET_AUTH_DATA:
            return {user: undefined, isAuth: true, balance: state.balance}
        case UserActionTypes.LOGOUT:
            return {user: undefined, isAuth: false, balance: state.balance}
        case UserActionTypes.DEPOSIT:
            return {user: state.user, isAuth: state.isAuth, balance: state.balance + action.payload}
        default:
            return state
    }
}

export const setAuthData = () => ({type: UserActionTypes.SET_AUTH_DATA});
export const logout = () => ({type: UserActionTypes.LOGOUT});
export const deposit = (amount: number) => ({type: UserActionTypes.DEPOSIT, payload: amount});
