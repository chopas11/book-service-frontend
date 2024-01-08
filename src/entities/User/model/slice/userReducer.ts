import {UserActionTypes, UserSchema} from "../types/userSchema.ts";

const initialState:UserSchema = {
    user: undefined,
    isAuth: false
}

export interface UserAction {
    type: string,
    payload?: never;
}

export const UserReducer = (state = initialState, action: UserAction) :UserSchema => {
    switch (action.type) {
        case UserActionTypes.SET_AUTH_DATA:
            return {user: undefined, isAuth: true}
        case UserActionTypes.LOGOUT:
            return {user: undefined, isAuth: false}
        default:
            return state
    }
}

export const setAuthData = () => ({type: UserActionTypes.SET_AUTH_DATA});
export const logout = () => ({type: UserActionTypes.LOGOUT});
