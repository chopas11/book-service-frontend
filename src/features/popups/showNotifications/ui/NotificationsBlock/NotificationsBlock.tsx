import React, {useEffect} from 'react';
import s from "./NotificationsBlock.module.css"
import {IconBlock} from "../../../../../shared/ui";
import TrashIcon from "../../../../../shared/assets/IconPack/TrashIcon/TrashIcon.tsx";
import {useTypedSelector} from "../../../../../shared/hooks/useTypedSelector.ts";
import {useDispatch} from "react-redux";
import {deleteNotificationAction, getNotificationsAction} from "../../model/slice/notificationsReducer.ts";
import {INotification} from "../../../../../entities/Notification/model/types/NotificationSchema.ts";


interface NotificationsFeatureProps {

}

const NotificationsBlock: React.FC<NotificationsFeatureProps> = () => {

    // Redux State
    const {notifications} = useTypedSelector(state => state.notifications)

    // get Notification from Server
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getNotificationsAction())
    }, [dispatch]);

    const deleteNotification = (item: INotification) => {
        dispatch(deleteNotificationAction(item));
    }

    return (
        <div className={s.notifications}>

            {notifications.length ?
                <>
                    <h3 className='white'>Уведомления</h3>
                    {notifications.map(item => {
                                                  return (
                                                  <div
                                                  key={item.id}
                                              className={`${s.notification} ${!item.isRead ? s.isRead : ""}`}
                    >
                    <div
                        onClick={() => deleteNotification(item)}
                        className={s.notification_trash}>
                        <IconBlock size="16px">
                            <TrashIcon color="var(--black-color)"/>
                        </IconBlock>
                    </div>
                    <div className={s.notification_text}>
                        <p>{item.text}</p>
                        <span>{String(item.time.getDate())}.{String(item.time.getMonth())}.{String(item.time.getFullYear())}</span>
                    </div>

                    </div>
                    )})}
                </>
                :
                <div className={s.noNotifications}><p>Новых уведомлений нет</p></div>
            }
        </div>
    );
};

export default NotificationsBlock;