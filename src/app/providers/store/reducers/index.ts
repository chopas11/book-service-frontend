import {combineReducers} from "redux";
import {notificationsReducer} from "../../../../features/showNotifications/model/slice/notificationsReducer.ts";
import {UserReducer} from "../../../../entities/User/model/slice/userReducer.ts";
import {publicationReducer} from "../../../../features/publication/model/slice/publicationReducer.ts";
import {toggleModalReducer} from "../../../../features/toggleModal/modal/slice/toggleModalReducer.ts";


export const rootReducer = combineReducers({
    notifications: notificationsReducer,
    user: UserReducer,
    publication: publicationReducer,
    modal: toggleModalReducer,
})

export type RootReducerType = ReturnType<typeof rootReducer>