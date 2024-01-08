import {combineReducers} from "redux";
import {notificationsReducer} from "../../../../features/showNotifications/model/slice/notificationsReducer.ts";
import {UserReducer} from "../../../../entities/User/model/slice/userReducer.ts";


export const rootReducer = combineReducers({
    notifications: notificationsReducer,
    user: UserReducer,
})

export type RootReducerType = ReturnType<typeof rootReducer>