
import {NotificationsAction, NotificationsActionTypes, NotificationsState} from "../types";
import {INotification} from "../../../../../entities/Notification/model/types/NotificationSchema.ts";

const initialState:NotificationsState = {
    notifications: [
        // {
        //     id: 1,
        //     text: "Скидка 2% на вторую публикацию!",
        //     time: new Date('Sun Dec 23 2023 00:44:37 GMT+0300 (Москва, стандартное время)'),
        //     isRead: false,
        // },
        // {
        //     id: 2,
        //     text: "Ваша книга в модерации",
        //     time: new Date('Sun Dec 22 2023 00:44:37 GMT+0300 (Москва, стандартное время)'),
        //     isRead: false,
        // },
        // {
        //     id: 3,
        //     text: "Скидка 5% на первую публикацию!",
        //     time: new Date('Sun Dec 21 2023 00:44:37 GMT+0300 (Москва, стандартное время)'),
        //     isRead: true,
        // },
    ],
    isNotifications: false,
}
// Reducer
export const notificationsReducer = (state = initialState, action: NotificationsAction): NotificationsState => {
    switch (action.type) {
        case NotificationsActionTypes.GET_NOTIFICATIONS:
            return {notifications: [
                    ...state.notifications,
                ], isNotifications: state.isNotifications}
        case NotificationsActionTypes.READ_NOTIFICATIONS:
            return {notifications: state.notifications.map(item => ({...item, isRead: true}) ), isNotifications: false}
        case NotificationsActionTypes.DELETE_NOTIFICATION:
            return {notifications: state.notifications.filter(item => item !== action.payload), isNotifications: state.isNotifications}
        case NotificationsActionTypes.CREATE_NOTIFICATION:
            const newNotification: INotification = {
                id: new Date().valueOf(),
                text: action.payload,
                time: new Date(),
                isRead: false,
            }
            return {notifications: [...state.notifications, newNotification], isNotifications: true}
        default:
            return state
    }
}

// Action Creators
export const getNotificationsAction = () => ({type: NotificationsActionTypes.GET_NOTIFICATIONS});
export const readNotificationsAction = () => ({type: NotificationsActionTypes.READ_NOTIFICATIONS});
export const deleteNotificationAction = (item: INotification) => ({type: NotificationsActionTypes.DELETE_NOTIFICATION, payload: item});
export const createNotificationAction = (message: string) => ({type: NotificationsActionTypes.CREATE_NOTIFICATION, payload: message});
