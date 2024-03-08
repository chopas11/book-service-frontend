import React from 'react';
import BellIcon from "../../../../../shared/assets/IconPack/BellIcon/BellIcon.tsx";
import s from "./NotificationsButton.module.css"
import {useTypedSelector} from "../../../../../shared/hooks/useTypedSelector.ts";
import {Button} from "../../../../../shared/ui";

interface NotificationButtonProps {
    callback?: React.EventHandler<never>,
}

const NotificationsButton: React.FC<NotificationButtonProps> = ({callback}) => {

    // Redux State
    const {isNotifications} = useTypedSelector(state => state.notifications)

    return (
        <div
            className={`${isNotifications ? s.isNotifications : ""}`}
            onClick={callback}>
            {/*<IconBlock size="50px" border="1px solid var(--theme-color)">*/}
            <Button type='borders' size='lg' paddingX='12.5px'>
                <BellIcon/>
            </Button>

            {/*</IconBlock>*/}
        </div>
    );
};

export default NotificationsButton;