
// Notification Type
export interface INotification {
    id: number,
    text: string,
    time: Date,
    isRead: boolean,
}

export interface NotificationsState {
    notifications: INotification[],
    isNotifications: boolean,
}

// Actions
export enum NotificationsActionTypes {
    GET_NOTIFICATIONS = 'GET_NOTIFICATIONS',
    READ_NOTIFICATIONS = 'READ_NOTIFICATIONS',
    DELETE_NOTIFICATION = 'DELETE_NOTIFICATION',
}
export interface NotificationsAction {
    type: string,
    payload?: never;
}