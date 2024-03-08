import React, {useState} from 'react';
import NotificationsButton from "./NotificationsButton/NotificationsButton.tsx";
import NotificationsBlock from "./NotificationsBlock/NotificationsBlock.tsx";
import TogglePopup from "../../togglePopup/TogglePopup.tsx";
import {useDispatch} from "react-redux";
import {readNotificationsAction} from "../model/slice/notificationsReducer.ts";

const ShowNotifications: React.FC = () => {

    // Local State
    const [isShowNotifications, setShowNotifications] = useState(false);

    const dispatch = useDispatch()

    const toggleNotifications = () :void => {
        if (!isShowNotifications)
            console.log("Notifications opened!")
        else {
            console.log("Notifications closed!")
            dispatch(readNotificationsAction())
        }
        setShowNotifications(!isShowNotifications);
    }

    return (
        <TogglePopup feature={<NotificationsBlock />}>
            <NotificationsButton callback={() => toggleNotifications()} />
        </TogglePopup>
    );
};

export default ShowNotifications