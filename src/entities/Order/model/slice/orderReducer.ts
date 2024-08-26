import {IOrder, OrderActionTypes, OrderSchema} from "../types/OrderSchema.ts";


const initialState: OrderSchema = {
    orders: [],
}

export interface OrderAction {
    type: string,
    payload?: never;
}

export const OrderReducer = (state = initialState, action: OrderAction) :OrderSchema => {
    switch (action.type) {
        case OrderActionTypes.ADD_ORDER:
            return {
                ...state,
                orders: [...state.orders, action.payload],
            }

        case OrderActionTypes.CHANGE_STATUS:
            return {
                ...state,
                orders: state.orders.map(order => {
                        if (order.id === action.payload) return {...order, status: 4}
                        else return order
                    })
            }
        default:
            return state
    }
}

export const addOrderAction = (order: IOrder) => ({type: OrderActionTypes.ADD_ORDER, payload: order});
export const changeOrderStatusAction = (orderID: number) => ({type: OrderActionTypes.CHANGE_STATUS, payload: orderID });
