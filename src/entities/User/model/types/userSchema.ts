
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
}

export enum UserActionTypes {
    SET_AUTH_DATA = 'SET_AUTH_DATA',
    LOGOUT = 'LOGOUT',
}