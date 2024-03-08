

export interface IBook {
    "title": string,
    "authors": Array<string>,
    "description": string,
    "publicationFile": File | null,
    "coverImage": File | null,
    "geners": Array<string>,
}

