import {combineReducers} from "redux";
import {notificationsReducer} from "../../../../features/popups/showNotifications/model/slice/notificationsReducer.ts";
import {UserReducer} from "../../../../entities/User/model/slice/userReducer.ts";
import {publicationReducer} from "../../../../features/publishBook/model/slice/publicationReducer.ts";
import {toggleModalReducer} from "../../../../features/modals/toggleModal/model/slice/toggleModalReducer.ts";
import {OrderReducer} from "../../../../entities/Order/model/slice/orderReducer.ts";
import {BookReducer} from "../../../../entities/Book/model/slice/bookReducer.ts";
import {CartReducer} from "../../../../entities/Cart/model/slice/cartReducer.ts";
// import {authReducer} from "../../../../features/modals/showAuthModal/model/slice/authReducer.ts";


export const rootReducer = combineReducers({
    // auth: authReducer,
    user: UserReducer,
    notifications: notificationsReducer,
    publication: publicationReducer,
    modal: toggleModalReducer,
    order: OrderReducer,
    book: BookReducer,
    cart: CartReducer,

})

export type RootReducerType = ReturnType<typeof rootReducer>