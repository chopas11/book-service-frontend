
export interface User {
    id: number,
    surname: string,
    name: string,
    patronymic?: string,
    login: string,
    email: string,
    phone: string,
    avatar?: string,
    group_ca?: number,
    account_type?: number,
}

export interface UserSchema {
    user?: User,
    isAuth: boolean,
    balance: number,
}

export enum UserActionTypes {
    CHECK_ACCESS_TOKEN = 'CHECK_ACCESS_TOKEN',
    SET_AUTH_DATA = 'SET_AUTH_DATA',
    LOGOUT = 'LOGOUT',
    DEPOSIT = 'DEPOSIT',
}