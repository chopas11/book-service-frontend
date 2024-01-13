import React from 'react';
import IconBlock from "../../../../shared/ui/IconBlock/IconBlock.tsx";
import BellIcon from "../../../../shared/assets/IconPack/BellIcon/BellIcon.tsx";
import s from "./NotificationsButton.module.css"
import {useTypedSelector} from "../../../../shared/hooks/useTypedSelector.ts";

interface NotificationButtonProps {
    callback: React.EventHandler<never>,
}

const NotificationsButton: React.FC<NotificationButtonProps> = ({callback}) => {

    // Redux State
    const {isNotifications} = useTypedSelector(state => state.notifications)

    return (
        <div
            className={`${isNotifications ? s.isNotifications : ""} ${s.notifications_button}`}
            onClick={callback}>
            <IconBlock size="50px" border="1px solid var(--theme-color)">
                <BellIcon color="var(--theme-color)"/>
            </IconBlock>
        </div>
    );
};

export default NotificationsButton;