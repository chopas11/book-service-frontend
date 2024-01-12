
// import {NotificationsAction, NotificationsState} from "../types";
import {combineReducers} from "redux";

const initialStateTariff: {tariff: number} = {
    tariff: 1,
}

const initialStateService: {service: number} = {
    service: 1,
}

// TariffReducer
export const tariffReducer = (state = initialStateTariff, action: NotificationsAction): NotificationsState => {
    switch (action.type) {
        default:
            return state
    }
}

export const serviceReducer = (state = initialStateService, action: NotificationsAction): NotificationsState => {
    switch (action.type) {
        default:
            return state
    }
}




export const publicationReducer = combineReducers({

    // title: titleReducer,
    // authors: authorsReducer,
    // annotation: annotationReducer,
    // file: fileReducer,
    // cover: coverReducer,
    // genres: genresReducer,
    // age: ageReducer,
    tariff: tariffReducer,
    services: serviceReducer,

})