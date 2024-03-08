// State
export interface AuthState {
    email: string,
    password: string,
}

// Actions Enum
export enum AuthActionTypes {
    UPDATE_EMAIL = 'UPDATE_EMAIL',
    UPDATE_PASSWORD = 'UPDATE_PASSWORD',
}
export interface AuthAction {
    type: string,
    payload: string;
}