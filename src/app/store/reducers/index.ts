import {combineReducers} from "redux";
import {notificationsReducer} from "../../../features/showNotifications/model/slice/notificationsReducer.ts";


export const rootReducer = combineReducers({
    notifications: notificationsReducer,
})

export type RootReducerType = ReturnType<typeof rootReducer>