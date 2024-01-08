

export interface Book {
    id: number,
    title: string,
    authorList: Array<string>,
    cover?: string,
    pages?: number,
    age?: number,
    file?: string,
    bookStatus: string,
    price: number,
    description: string,
    genreList?: Array<string>,
    tagsList?: Array<string>,
    ISBN?: string,
}
