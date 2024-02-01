
export interface ToggleModalState {
    active: boolean,
    path: string,
}

const initialStateToggleModal: ToggleModalState = {
    active: false,
    path: "",
}

export interface ToggleModalAction {
    type: string,
    payload: never;
}

export enum ToggleModalActionTypes {
    TOGGLE = 'TOGGLE',
}

export const toggleModalReducer = (state = initialStateToggleModal, action: ToggleModalAction): ToggleModalState => {
    switch (action.type) {
        case ToggleModalActionTypes.TOGGLE:
            return {
                active: !state.active,
                path: action.payload,
            }
        default:
            return state
    }

}

export const toggle = (path: string) => ({type: ToggleModalActionTypes.TOGGLE, payload: path});