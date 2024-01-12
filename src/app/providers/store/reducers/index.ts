import {combineReducers} from "redux";
import {notificationsReducer} from "../../../../features/showNotifications/model/slice/notificationsReducer.ts";
import {UserReducer} from "../../../../entities/User/model/slice/userReducer.ts";
import {publicationReducer} from "../../../../features/publishBook/model/slice/publicationReducer.ts";


export const rootReducer = combineReducers({
    notifications: notificationsReducer,
    user: UserReducer,
    publication: publicationReducer,
})

export type RootReducerType = ReturnType<typeof rootReducer>