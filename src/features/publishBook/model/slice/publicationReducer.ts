import {PublicationAction, PublicationActionTypes, PublicationState} from "../types";
import {ITariff} from "../../../../entities/Tariff/model/types/TariffSchema.ts";


const initialStatePublication: PublicationState = {
    publication: {
        title: "",
        authors: [],
        description: "",
        publicationFile: null,
        coverImage: null,
        geners: [],
    },
    services: [],
    tariff: {
        id: -1,
        name: "",
        publicationPrice: 0,
        royalty: 0,
        conditions: []
    }
}



// publicationReducer
export const publicationReducer = (state = initialStatePublication, action: PublicationAction): PublicationState => {

    switch (action.type) {

        // Изменение данных
        case PublicationActionTypes.UPDATE_TITLE:
            return {
                ...state,
                publication: {...state.publication, title: action.payload}
            }

        case PublicationActionTypes.ADD_AUTHOR:
            return {
                ...state,
                publication: {...state.publication, authors: [...state.publication.authors, action.payload]}
            }

        case PublicationActionTypes.DELETE_AUTHOR:
            return {
                ...state,
                publication: {...state.publication, authors: [...state.publication.authors].filter(author => author !== action.payload) }
            }

        case PublicationActionTypes.UPDATE_DESCRIPTION:
            return {
                ...state,
                publication: {...state.publication, description: action.payload}
            }

        case PublicationActionTypes.UPLOAD_FILE:
            return {
                ...state,
                publication: {...state.publication, publicationFile: action.payload}
            }

        case PublicationActionTypes.UPLOAD_COVER:
            return {
                ...state,
                publication: {...state.publication, coverImage: action.payload}
            }

        // case PublicationActionTypes.SELECT_GENRES:
        //     return {
        //         ...state
        //     }
        //
        // case PublicationActionTypes.DELETE_GENRES:
        //     return {
        //         ...state
        //     }

        case PublicationActionTypes.CHOOSE_TARIFF:
            return {
                ...state,
                tariff: action.payload
            }

        case PublicationActionTypes.ADD_SERVICE:
            return {
                ...state,
                services: [...state.services, action.payload]
            }

        case PublicationActionTypes.DELETE_SERVICE:
            return {
                ...state,
                services: [...state.services].filter(item => item.id !== action.payload),
            }


        //     PUBLICATION!!!
        case PublicationActionTypes.PUBLICATION:
            return {
                ...initialStatePublication,
            }
        default:
            return state
    }
}

// Action Creators
export const updateTitleAction = (title: string) => ({type: PublicationActionTypes.UPDATE_TITLE, payload: title});
export const addAuthorAction = (author: string) => ({type: PublicationActionTypes.ADD_AUTHOR, payload: author});
export const deleteAuthorAction = (author: string) => ({type: PublicationActionTypes.DELETE_AUTHOR, payload: author});
export const updateDescriptionAction = (description: string) => ({type: PublicationActionTypes.UPDATE_DESCRIPTION, payload: description});
export const uploadFileAction = (file: File) => ({type: PublicationActionTypes.UPLOAD_FILE, payload: file});
export const uploadCoverAction = (cover: File) => ({type: PublicationActionTypes.UPLOAD_COVER, payload: cover});
// export const selectGenreAction
// export const selectAgeAction
export const chooseTariffAction = (tariff: ITariff) => ({type: PublicationActionTypes.CHOOSE_TARIFF, payload: tariff});
export const addService = (service: IService)  => ({type: PublicationActionTypes.ADD_SERVICE, payload: service});
export const deleteService = (serviceID: number) => ({type: PublicationActionTypes.DELETE_SERVICE, payload: serviceID});
export const publication = () => ({type: PublicationActionTypes.PUBLICATION});
