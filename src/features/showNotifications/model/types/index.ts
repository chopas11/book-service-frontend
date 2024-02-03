import {INotification} from "../../../../entities/Notification/model/types/NotificationSchema.ts";


export interface NotificationsState {
    notifications: INotification[],
    isNotifications: boolean,
}

// Actions
export enum NotificationsActionTypes {
    GET_NOTIFICATIONS = 'GET_NOTIFICATIONS',
    READ_NOTIFICATIONS = 'READ_NOTIFICATIONS',
    DELETE_NOTIFICATION = 'DELETE_NOTIFICATION',
    CREATE_NOTIFICATION = 'CREATE_NOTIFICATION',
}
export interface NotificationsAction {
    type: string,
    payload?: never;
}