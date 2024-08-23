

export interface IBook {
    "id": number,
    "title": string,
    "authors": Array<string>,
    "description": string,
    "price": number,
    "publicationFile": File | null,
    "coverImage": File | null,
    "geners": Array<string>,
}

export interface BookSchema {
    catalogBooks: IBook[],
    cartBooks: IBook[],
    myBooks: IBook[],
}

export enum BookActionTypes {
    TOOGLE_IN_CART = "TOOGLE_IN_CART",
    CLEAR_CART = "CLEAR_CART",
    ADD_MYBOOKS = "ADD_MYBOOKS",
}

