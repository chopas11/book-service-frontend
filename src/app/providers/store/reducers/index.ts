import {combineReducers} from "redux";
import {notificationsReducer} from "../../../../features/popups/showNotifications/model/slice/notificationsReducer.ts";
import {UserReducer} from "../../../../entities/User/model/slice/userReducer.ts";
import {publicationReducer} from "../../../../features/publishBook/model/slice/publicationReducer.ts";
import {toggleModalReducer} from "../../../../features/modals/toggleModal/model/slice/toggleModalReducer.ts";
import {authReducer} from "../../../../features/modals/showAuthModal/model/slice/authReducer.ts";


export const rootReducer = combineReducers({
    notifications: notificationsReducer,
    user: UserReducer,
    publication: publicationReducer,
    modal: toggleModalReducer,
    auth: authReducer,
})

export type RootReducerType = ReturnType<typeof rootReducer>