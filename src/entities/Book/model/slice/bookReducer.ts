import {BookActionTypes, BookSchema} from "../types/bookSchema.ts";
import book1 from "../../../../shared/assets/images/book1.png";
import book2 from "../../../../shared/assets/images/book2.png";
import book3 from "../../../../shared/assets/images/book3.png";
import book4 from "../../../../shared/assets/images/book4.png";

const initialState: BookSchema = {
    books: [
        {
            id: 1111,
            title: "Зеленый павильон",
            description: "Description",
            authors: ["Ирина Нахова"],
            price: 500,
            coverImage: book1,
            geners: ["Творчество"],
            publicationFile: null,
        },
        {
            id: 2222,
            title: "Моби-Дик",
            description: "Description",
            authors: ["Герман Мельвиль"],
            price: 500,
            coverImage: book2,
            geners: ["Фантастика"],
            publicationFile: null,
        },
        {
            id: 3333,
            title: "Марк Твен",
            description: "Description",
            authors: ["Неизвестный автор"],
            price: 500,
            coverImage: book3,
            geners: ["Биография"],
            publicationFile: null,
        },
        {
            id: 4444,
            title: "Война и Мир",
            description: "Description",
            authors: ["Дмитрий Чухров",],
            price: 500,
            coverImage: book4,
            geners: ["Манга"],
            publicationFile: null,
        },
    ],
}

export interface BookAction {
    type: string,
    payload?: never;
}

export const BookReducer = (state = initialState, action: BookAction) :BookSchema => {
    switch (action.type) {
        default:
            return state
    }
}

