

export interface TitleState {
    title: string,
}

export enum TitleActionTypes {
    UPDATE_TITLE = 'UPDATE_TITLE',
}
export interface TitleAction {
    type: string,
    payload: string;
}

const initialStateTitle: TitleState = {
    title: "",
}


// TitleReducer
export const titleReducer = (state = initialStateTitle, action: TitleAction): TitleState => {
    switch (action.type) {
        case TitleActionTypes.UPDATE_TITLE:
            return {title: action.payload}
        default:
            return state
    }
}

// Action Creators
export const updateTitle = (title: string) => ({type: TitleActionTypes.UPDATE_TITLE, payload: title});


