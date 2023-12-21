// import React from 'react';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

import s from "./Header.module.css"

import Logo from "../../shared/ui/Logo/Logo";
import BellIcon from "../../shared/assets/IconPack/BellIcon/BellIcon";
import ProfileIcon from "../../shared/assets/IconPack/ProfileIcon/ProfileIcon";
import IconBlock from "../../shared/ui/IconBlock/IconBlock";

import NotificationsFeature from "../../features/NotificationsFeature/NotificationsFeature";
import ProfileFeature from "../../features/ProfileFeature/ProfileFeature";

interface INotification {
    text: string,
    time: string,
    isRead: boolean
}

const Header: React.FC = () => {

    const [isShowNotifications, setIsShowNotifications] = useState(false);
    const [isProfile, setIsProfile] = useState(false);
    const [isNotifications, setIsNotifications] = useState(false)

    const notifications : Array<INotification> = [
        {
            text: "Скидка 2% на вторую публикацию!",
            time: 'Sun Dec 24 2023 00:44:37 GMT+0300 (Москва, стандартное время)',
            isRead: false,
        },
        {
            text: "Ваша книга в модерации",
            time: 'Sun Dec 23 2023 00:44:37 GMT+0300 (Москва, стандартное время)',
            isRead: false,
        },
        {
            text: "Скидка 5% на первую публикацию!",
            time: 'Sun Dec 22 2023 00:44:37 GMT+0300 (Москва, стандартное время)',
            isRead: true,
        },
    ];
    const [notices, setNotices] = useState(notifications);

    useEffect(() => {
        checkIsNotifications();
    }, [])


    const checkIsNotifications = () => {
        setIsNotifications(notices.some( item => !item.isRead));
    }

    const toggleNotifications = () => {
        if (!isShowNotifications)
            console.log("Notifications opened!")
        else {
            console.log("Notifications closed!")
            // Будет работать только в стейте
            setNotices(notices.map(item => {
                return { ...item, isRead: true }
            }))

            setIsNotifications(false);
        }

        setIsShowNotifications(!isShowNotifications);
    }

    const toggleProfile = () => {
        if (!isProfile)
            console.log("Profile opened!")
        else
            console.log("Profile closed!")
        setIsProfile(!isProfile);
    }

    return (
        <div className={s.header}>
            <Logo />
            <div className={s.navbar}>
                <ul>

                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/publish">Публикация</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                </ul>
            </div>
            <div className={s.headers_menu}>
                <div className={`${isNotifications ? s.notice : ""}`} onClick={() => toggleNotifications()}>
                    <IconBlock size="50px" border="1px solid #000">
                        <BellIcon />
                    </IconBlock>
                </div>
                <div onClick={() => toggleProfile()}>
                    <IconBlock size="50px" border="1px solid #000">
                        <ProfileIcon />
                    </IconBlock>
                </div>


            </div>
            <NotificationsFeature visible={isShowNotifications} notifications={notices} />
            <ProfileFeature visible={isProfile} />
        </div>
    );
};

export default Header;