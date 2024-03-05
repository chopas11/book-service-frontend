import {UserActionTypes, UserSchema} from "../types/userSchema.ts";

const initialState:UserSchema = {
    user: undefined,
    isAuth: false,
    balance: 0,
}

export interface UserAction {
    type: string,
    payload?: never;
}

export const UserReducer = (state = initialState, action: UserAction) :UserSchema => {
    switch (action.type) {
        case UserActionTypes.CHECK_ACCESS_TOKEN:
            if (action.payload === true) {
                return {user: undefined, isAuth: true, balance: state.balance}
            } else {
                return {user: undefined, isAuth: false, balance: state.balance}
            }
        case UserActionTypes.SET_AUTH_DATA:
            return {user: undefined, isAuth: true, balance: state.balance}
        case UserActionTypes.LOGOUT:
            return {user: undefined, isAuth: false, balance: state.balance}
        // case UserActionTypes.DEPOSIT:
        //     return {user: state.user, isAuth: state.isAuth, balance: state.balance + action.payload}
        default:
            return state
    }
}

export const checkAccessTokenAction = (isActive: boolean) => ({type: UserActionTypes.CHECK_ACCESS_TOKEN, payload: isActive});
export const setAuthDataAction = () => ({type: UserActionTypes.SET_AUTH_DATA});
export const logoutAction = () => ({type: UserActionTypes.LOGOUT});
// export const depositAction = (amount: number) => ({type: UserActionTypes.DEPOSIT, payload: amount});
