import {UserActionTypes, UserRole, UserSchema} from "../types/userSchema.ts";

const initialState:UserSchema = {
    user: undefined,
    isAuth: false,
    role: 'author',
    balance: 10000,
}

export interface UserAction {
    type: string,
    payload?: never;
}

export const UserReducer = (state = initialState, action: UserAction) :UserSchema => {
    switch (action.type) {
        case UserActionTypes.CHECK_ACCESS_TOKEN:
            if (action.payload === true) {
                return {
                    ...state,
                    isAuth: true
                }

            } else
                return {
                ...state,
                isAuth: false
                }
        case UserActionTypes.SET_AUTH_DATA:
            return {
                ...state,
                isAuth: true
            }
        case UserActionTypes.LOGOUT:
            return {
                ...state,
                isAuth: false
            }

        case UserActionTypes.CHANGE_ROLE:
            return {
                ...state,
                role: action.payload
            }
        case UserActionTypes.DEPOSIT:
            return {
                ...state,
                balance: state.balance
            }
        case UserActionTypes.PURCHASE:
            return {
                ...state,
                balance: state.balance - action.payload
            }
        default:
            return state
    }
}

export const checkAccessTokenAction = (isActive: boolean) => ({type: UserActionTypes.CHECK_ACCESS_TOKEN, payload: isActive});
export const setAuthDataAction = () => ({type: UserActionTypes.SET_AUTH_DATA});
export const logoutAction = () => ({type: UserActionTypes.LOGOUT});
// export const depositAction = (amount: number) => ({type: UserActionTypes.DEPOSIT, payload: amount});

export const purchaseMoney = (amount: number) => ({type: UserActionTypes.PURCHASE, payload: amount});

export const changeRole = (role: UserRole) => ({type: UserActionTypes.CHANGE_ROLE, payload: role});