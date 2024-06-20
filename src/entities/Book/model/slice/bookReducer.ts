import {BookActionTypes, BookSchema, IBook} from "../types/bookSchema.ts";
import book1 from "../../../../shared/assets/images/book1.png";
import book2 from "../../../../shared/assets/images/book2.png";
import book3 from "../../../../shared/assets/images/book3.png";
import book4 from "../../../../shared/assets/images/book4.png";
const initialState: BookSchema = {
    catalogBooks: [
        // {
        //     id: 1111,
        //     title: "Зеленый павильон",
        //     description: "Description",
        //     authors: ["Ирина Нахова"],
        //     price: 550,
        //     coverImage: book1,
        //     geners: ["Творчество"],
        //     publicationFile: null,
        // },
        // {
        //     id: 2222,
        //     title: "Моби-Дик",
        //     description: "Description",
        //     authors: ["Герман Мельвиль"],
        //     price: 540,
        //     coverImage: book2,
        //     geners: ["Фантастика"],
        //     publicationFile: null,
        // },
        // {
        //     id: 3333,
        //     title: "Марк Твен",
        //     description: "Description",
        //     authors: ["Неизвестный автор"],
        //     price: 530,
        //     coverImage: book3,
        //     geners: ["Биография"],
        //     publicationFile: null,
        // },
        // {
        //     id: 4444,
        //     title: "Война и Мир",
        //     description: "Description",
        //     authors: ["Дмитрий Чухров",],
        //     price: 520,
        //     coverImage: book4,
        //     geners: ["Манга"],
        //     publicationFile: null,
        // },
        // {
        //     id: 5555,
        //     title: "Зеленый павильон",
        //     description: "Description",
        //     authors: ["Ирина Нахова"],
        //     price: 550,
        //     coverImage: book1,
        //     geners: ["Творчество"],
        //     publicationFile: null,
        // },
        // {
        //     id: 6666,
        //     title: "Моби-Дик",
        //     description: "Description",
        //     authors: ["Герман Мельвиль"],
        //     price: 540,
        //     coverImage: book2,
        //     geners: ["Фантастика"],
        //     publicationFile: null,
        // },
        // {
        //     id: 7777,
        //     title: "Марк Твен",
        //     description: "Description",
        //     authors: ["Неизвестный автор"],
        //     price: 530,
        //     coverImage: book3,
        //     geners: ["Биография"],
        //     publicationFile: null,
        // },
        // {
        //     id: 8888,
        //     title: "Война и Мир",
        //     description: "Description",
        //     authors: ["Дмитрий Чухров",],
        //     price: 520,
        //     coverImage: book4,
        //     geners: ["Манга"],
        //     publicationFile: null,
        // },
    ],
    cartBooks: [],
    myBooks: [],
}

export interface BookAction {
    type: string,
    payload?: never;
}

export const BookReducer = (state = initialState, action: BookAction) :BookSchema => {
    switch (action.type) {

        case BookActionTypes.TOOGLE_IN_CART:

            if (state.cartBooks.filter(book => book.id === action.payload.id).length === 0) {
                return {
                    ...state,
                    cartBooks: [...state.cartBooks, action.payload],
                }
            } else {
                return {
                    ...state,
                    cartBooks: state.cartBooks.filter(book => book.id !== action.payload.id)
                }
            }

        case BookActionTypes.CLEAR_CART:
            return {
                ...state,
                cartBooks: [],
            }

        case BookActionTypes.ADD_MYBOOKS:
            return {
                ...state,
                myBooks: [...state.myBooks, ...state.cartBooks]
            }
        default:
            return state
    }
}

export const toogleInCartAction = (book: IBook) => ({type: BookActionTypes.TOOGLE_IN_CART, payload: book});
export const ClearCartAction = () => ({type: BookActionTypes.CLEAR_CART});
export const addMyBooksAction = () => ({type: BookActionTypes.ADD_MYBOOKS});
