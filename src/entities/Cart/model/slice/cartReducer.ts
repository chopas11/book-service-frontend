import {CartActionTypes, CartSchema} from "../types/cartSchema.ts";
import {IBook} from "../../../Book/model/types/bookSchema.ts";


const initialState: CartSchema = {
    books: []
}

export interface CartAction {
    type: string,
    payload?: never;
}

export const CartReducer = (state = initialState, action: CartAction) :CartSchema => {
    switch (action.type) {
        case CartActionTypes.TOOGLE_IN_CART:

            if (state.books.filter(book => book.id === action.payload.id).length === 0) {
                return {
                    ...state,
                    books: [...state.books, action.payload],
                }
            } else {
                return {
                    ...state,
                    books: state.books.filter(book => book.id !== action.payload.id)
                }
            }

        default:
            return state
    }
}


export const toogleInCartAction = (book: IBook) => ({type: CartActionTypes.TOOGLE_IN_CART, payload: book});

