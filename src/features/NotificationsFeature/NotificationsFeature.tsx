// import React from 'react';

import s from "./NotificationsFeature.module.css"
import {IconBlock} from "../../shared/ui";
import TrashIcon from "../../shared/assets/IconPack/TrashIcon/TrashIcon";

interface INotification {
    text: string,
    time: string,
    isRead: boolean,
}

interface NotificationsFeatureProps {
    visible: boolean,
    notifications: Array<INotification>,
}

const NotificationsFeature: React.FC<NotificationsFeatureProps> = ({visible, notifications}) => {
    return (
        <div
            className={`${s.notifications} ${visible ? s.visible : s.invisible}`}>
            {/*<h3>Уведомления</h3>*/}
            {
                notifications.map(item => {
                    return (
                        <div className={`${s.notification} ${!item.isRead ? s.isRead : ""}`}>
                            <div className={s.notification_trash}>
                                <IconBlock>
                                    <TrashIcon />
                                </IconBlock>
                            </div>
                            <div className={s.notification_text}>
                                <p>{item.text}</p>
                                <span>Сегодня</span>
                            </div>

                        </div>
                    )
                })
            }



        </div>
    );
};

export default NotificationsFeature;