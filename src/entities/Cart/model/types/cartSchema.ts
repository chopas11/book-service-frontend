import {IBook} from "../../../Book/model/types/bookSchema.ts";

export interface CartSchema {
    books: IBook[]
}


export enum CartActionTypes {
    TOOGLE_IN_CART = "TOOGLE_IN_CART"
}