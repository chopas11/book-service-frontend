import React from 'react';
import {Link} from "react-router-dom";
import {useState} from "react";
import s from "./Header.module.css"
import ProfileIcon from "../../shared/assets/IconPack/ProfileIcon/ProfileIcon";
import ProfileFeature from "../../features/showMiniProfile/ProfileFeature";
import ShowNotifications from "../../features/showNotifications/ui";
import {IconBlock, Logo} from "../../shared/ui";

const Header: React.FC = () => {

    const [isProfile, setIsProfile] = useState(false);
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
                <ShowNotifications />
                <ProfileFeature visible={isProfile} />
                <div onClick={() => toggleProfile()}>
                    <IconBlock size="50px" border="1px solid #000">
                        <ProfileIcon />
                    </IconBlock>
                </div>
            </div>
        </div>
    );
};

export default Header;