

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
    books: IBook[]
}

export enum BookActionTypes {

}

