import React, {useEffect} from 'react';
import s from "./NotificationsBlock.module.css"
import {IconBlock} from "../../../../shared/ui";
import TrashIcon from "../../../../shared/assets/IconPack/TrashIcon/TrashIcon.tsx";
import {useTypedSelector} from "../../../../shared/hooks/useTypedSelector.ts";
import {useDispatch} from "react-redux";
import {deleteNotificationAction, getNotificationsAction} from "../../model/slice/notificationsReducer.ts";
import {INotification} from "../../model/types";

interface NotificationsFeatureProps {
    visible: boolean,
}

const NotificationsBlock: React.FC<NotificationsFeatureProps> = ({visible}) => {

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
        <div className={`${s.notifications} ${visible ? s.visible : s.invisible}`}>
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
                                    <TrashIcon />
                                </IconBlock>
                            </div>
                            <div className={s.notification_text}>
                                <p>{item.text}</p>
                                <span>Сегодня</span>
                            </div>

                        </div>
                    )
                })}
        </div>
    );
};

export default NotificationsBlock;