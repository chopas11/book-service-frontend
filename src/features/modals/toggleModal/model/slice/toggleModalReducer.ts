
export interface ToggleModalState {
    active: boolean,
    path: string,
    props: number
}

const initialStateToggleModal: ToggleModalState = {
    active: false,
    path: "",
    props: 0,
}

export interface ToggleModalAction {
    type: string,
    payload: never;
}

export enum ToggleModalActionTypes {
    TOGGLE = 'TOGGLE',
    HIDE = 'HIDE',
}

export const toggleModalReducer = (state = initialStateToggleModal, action: ToggleModalAction): ToggleModalState => {
    switch (action.type) {
        case ToggleModalActionTypes.TOGGLE:
            return {
                active: !state.active,
                path: action.payload.path,
                props: action.payload.props
            }
        case ToggleModalActionTypes.HIDE:
            return {
                ...state,
                active: false,
                path: '',
            }
        default:
            return state
    }

}

interface Props {
    path: string
    props?: Array<number>
}

export const toggle = (props: Props) => ({type: ToggleModalActionTypes.TOGGLE, payload: props});
export const hide = () => ({type: ToggleModalActionTypes.HIDE});
