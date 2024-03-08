
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

export type UserRole = 'author' | 'reader' | 'all'

export interface UserSchema {
    user?: User,
    isAuth: boolean,
    role: UserRole,
    balance: number,
}

export enum UserActionTypes {
    CHECK_ACCESS_TOKEN = 'CHECK_ACCESS_TOKEN',
    SET_AUTH_DATA = 'SET_AUTH_DATA',
    LOGOUT = 'LOGOUT',
    DEPOSIT = 'DEPOSIT',
    PURCHASE = 'PURCHASE',
    CHANGE_ROLE = 'CHANGE_ROLE',
}