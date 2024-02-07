import React, {useState} from 'react';
import NotificationsButton from "./NotificationsButton/NotificationsButton.tsx";
import NotificationsBlock from "./NotificationsBlock/NotificationsBlock.tsx";
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
        <>
            <NotificationsButton callback={() => toggleNotifications()} />
            <NotificationsBlock visible={isShowNotifications} />
        </>
    );
};

export default ShowNotifications