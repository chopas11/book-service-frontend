
export interface ITariff {
    id: number,
    "name": string,
    "publicationPrice": number,
    "royalty": number,
    "conditions": Array<string>,
}