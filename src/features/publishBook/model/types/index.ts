import {ITariff} from "../../../../entities/Tariff/model/types/TariffSchema.ts";
import {IService} from "../../../../entities/Service/model/types/ServiceSchema.ts";


export interface PublicationState {
    publication: IPublication,
    services: IService[],
    tariff: ITariff,
}

export enum PublicationActionTypes {
    UPDATE_TITLE = 'UPDATE_TITLE',
    ADD_AUTHOR = 'ADD_AUTHOR',
    DELETE_AUTHOR = 'DELETE_AUTHOR',
    UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION',
    UPLOAD_FILE = 'UPLOAD_FILE',
    UPLOAD_COVER = 'UPLOAD_COVER',
    SELECT_GENRES = 'SELECT_GENRES',
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