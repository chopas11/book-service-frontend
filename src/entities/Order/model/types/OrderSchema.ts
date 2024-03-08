import {ITariff} from "../../../Tariff/model/types/TariffSchema.ts";
import {IBook} from "../../../Book/model/types/bookSchema.ts";
import {IService} from "../../../Service/model/types/ServiceSchema.ts";

export interface IOrder {
    id: number,
    publication: IBook,
    services: IService[],
    tariff: ITariff,
    status: 1 | 2 | 3 | 4,
}

export interface OrderSchema {
    orders: IOrder[],
}

export enum OrderActionTypes {
    ADD_ORDER = 'ADD_ORDER',
    CHANGE_STATUS = 'CHANGE_STATUS',
}
