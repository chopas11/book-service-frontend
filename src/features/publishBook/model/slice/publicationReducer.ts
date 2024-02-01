// import {combineReducers} from "redux";
// import {titleReducer} from "../../../updateTitle/model/slice/titleReducer.ts";


export interface PublicationState {
    title: string,
    authors: string[],
    description: string,
    file: File | null,
    cover: File | null,
    genres: string[],
    age: string,
    tariff: number,
    services: IService[],
    required: string[],
}


const initialStatePublication: PublicationState = {
    title: "",
    authors: [],
    description: "",
    file: null,
    cover: null,
    genres: [],
    age: "",
    tariff: -1,
    services: [],
    required: [],
}

export enum PublicationActionTypes {
    UPDATE_TITLE = 'UPDATE_TITLE',
    ADD_AUTHOR = 'ADD_AUTHOR',
    DELETE_AUTHOR = 'DELETE_AUTHOR',
    UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION',
    UPLOAD_FILE = 'UPLOAD_FILE',
    UPLOAD_COVER = 'UPLOAD_COVER',
    ADD_GENRES = 'ADD_GENRES',
    DELETE_GENRES = 'DELETE_GENRES',
    UPDATE_AGE = 'UPDATE_AGE',
    CHOOSE_TARIFF = 'CHOOSE_TARIFF',
    ADD_SERVICE = 'ADD_SERVICE',
    DELETE_SERVICE = 'DELETE_SERVICE',
    PUBLICATION = 'PUBLICATION',
}
export interface PublicationAction {
    type: string,
    payload: never;
}

// publicationReducer
export const publicationReducer = (state = initialStatePublication, action: PublicationAction): PublicationState => {
    switch (action.type) {
        case PublicationActionTypes.UPDATE_TITLE:
            return {
                ...state,
                title: action.payload,
            }

        case PublicationActionTypes.ADD_AUTHOR:
            const authors = [...state.authors]
            authors.push(action.payload);
            return {
                ...state,
                authors: authors
            }

        case PublicationActionTypes.DELETE_AUTHOR:
            return {
                ...state,
                authors: [...state.authors].filter(author => author !== action.payload)
            }

        case PublicationActionTypes.UPDATE_DESCRIPTION:
            return {
                ...state,
                description: action.payload
            }

        case PublicationActionTypes.UPLOAD_FILE:
            if (action.payload === null) {
                return state
            }
            return {
                ...state,
                file: action.payload
            }

        case PublicationActionTypes.UPLOAD_COVER:
            if (action.payload === null) {
                return state
            }
            return {
                ...state,
                cover: action.payload
            }


        case PublicationActionTypes.PUBLICATION:
            console.log("Публикация книги!");
            return state
            // return {
                // ...initialStatePublication,
            // }
        default:
            return state
    }
}

// Action Creators
export const updateTitle = (title: string) => ({type: PublicationActionTypes.UPDATE_TITLE, payload: title});
export const addAuthor = (author: string) => ({type: PublicationActionTypes.ADD_AUTHOR, payload: author});
export const deleteAuthor = (author: string) => ({type: PublicationActionTypes.DELETE_AUTHOR, payload: author});
export const updateDescription = (description: string) => ({type: PublicationActionTypes.UPDATE_DESCRIPTION, payload: description});
export const uploadFile = (file: File) => ({type: PublicationActionTypes.UPLOAD_FILE, payload: file});
export const uploadCover = (cover: File) => ({type: PublicationActionTypes.UPLOAD_COVER, payload: cover});

export const publication = () => ({type: PublicationActionTypes.PUBLICATION});
