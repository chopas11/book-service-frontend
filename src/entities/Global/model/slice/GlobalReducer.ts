
interface GlobalSchema {
    theme: 'light' | 'dark';
}

const initialState: GlobalSchema = {
    theme: localStorage.getItem('theme') ?? 'light',
}

export interface GlobalAction {
    type: string,
    payload?: never;
}

enum GlobalActionTypes {
    SET_THEME = "SET_THEME",
}

export const GlobalReducer = (state = initialState, action: GlobalAction) :GlobalSchema => {
    switch (action.type) {
        case GlobalActionTypes.SET_THEME:

            if (state.theme === 'dark') {
                localStorage.setItem('theme', 'light');
                return {
                    ...state,
                    theme: 'light'
                }
            } else {
                localStorage.setItem('theme', 'dark');
                return {
                    ...state,
                    theme: 'dark'
                }
            }


        default:
            return state
    }
}

export const addOrderAction = () => ({type: GlobalActionTypes.SET_THEME});
